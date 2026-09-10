import { useState } from 'react';
import { MAILER_URL } from '../constants';

function useMailer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = (data) => {
    setIsLoading(true);
    setIsDone(false);
    setError(null);
    fetch(MAILER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) throw Error(`response status: ${response.status}`);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
        setIsDone(true);
      });
  };

  return {
    isLoading,
    isDone,
    error,
    sendMessage,
  };
}

export default useMailer;
