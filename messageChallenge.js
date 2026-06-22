
// const testUrl = 'https://docs.google.com/document/d/e/2PACX-1vTMOmshQe8YvaRXi6gEPKKlsC6UpFJSMAk4mQjLm_u1gmHdVVTaeh7nBNFBRlui0sTZ-snGwZM4DBCT/pub';
const testUrl = 'https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub';

async function getData(url) {
  return await fetch(url)
    .then(async (response) => {
      try {
        const stream = response.body.pipeThrough(new TextDecoderStream());
        let data = '';
        for await (const chunk of stream) {
          data += chunk;
        }
        return data;
      } catch (e) {
        console.log(e);
      }
    })
}

function parseData(data) {
  const values = [...data.matchAll(/(?:<span class="c[1-9]">)(.{1}|[0-9]+)(?:<\/span>)/g)].map((value) => value[1]);

  const parsed = {};
  let maxX = 0;
  let maxY = 0;

  for (let i = 0; i < values.length; i += 3) {
    const x = Number.parseInt(values[i]);
    const y = Number.parseInt(values[i + 2]);
    const value = values[i + 1];

    if (parsed[y]) parsed[y][x] = values[i + 1];
    else parsed[y] = { [x]: value };

    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  }

  parsed.maxX = maxX;
  parsed.maxY = maxY;
  return parsed;
}

function printData(data) {
  const { maxX, maxY } = data;
  let message = '';
  for (let y = maxY; y >= 0; y--) {
    for(let x = 0; x <= maxX; x++) {
      message += data[y]?.[x] || ' ';
    }
    message += '\n';
  }

  console.log(message);
}

async function parseMessage(url) {
  const data = await getData(url);

  if (data) {
    const parsed = parseData(data);
    printData(parsed);
  }
}

parseMessage(testUrl);