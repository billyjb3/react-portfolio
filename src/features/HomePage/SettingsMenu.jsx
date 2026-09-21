import React, { useState, useRef } from 'react';
import {
  useOnClickout,
  IconClose,
  ButtonIcon,
  SimpleToggleSwitch,
} from '@billyjb3/global-react';
import { IconGear } from '../../components/icons';
import { useHomeContext } from './homeContext';

// TODO: animate gear icon on hover
// TODO: have the menu transition include opacity and maybe even blur to make it look like the menu is shimmering into view
const SettingsMenu = (props) => {
  const {
    isRight,
  } = props;
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useOnClickout(menuRef, () => setIsOpen(false));
  const {
    pageSettings,
    updatePageSetting,
    backgroundState,
    updateBackgroundState,
  } = useHomeContext();

  const lrStyle = isRight ? 'right' : 'left';
  const border = isRight ? 'border-l-1' : 'border-r-1';

  return (
    <>
      <div
        className={`settingsTab ${lrStyle} color-bg-surface flex flex-justify-center flex-align-center z-top`}
        onClick={() => setIsOpen(true)}
        role="button"
      >
        <IconGear />
      </div>

      <div
        ref={menuRef}
        className={`settingsMenu ${lrStyle} ${isOpen ? 'open' : ''} ${border} border-fade-b color-bg-surface z-top pad-3 overflow-y-auto overflow-x-hidden`}
      >
        <div className={`pad-3-b flex flex-justify-between flex-align-center`}>
          <ButtonIcon onClick={() => setIsOpen(false)}>
            <IconClose />
          </ButtonIcon>
          <h1 className="heading-5 uppercase">
            Settings
          </h1>
        </div>

        <div className="pad-3-b">
          {Object.entries(pageSettings).map(([key, state]) => {
            const { value, input, label } = state;

            if (input === 'switch') {
              return (
                <div className="pad-2-tb flex flex-align-center flex-justify-between">
                  {label}
                  <SimpleToggleSwitch
                    isOn={value}
                    onClick={() => updatePageSetting(key, !value)}
                    className={`${value ? 'color-bg-surface-secondary' : 'color-bg-surface'} border-1 color-border-primary`}
                    sliderClass="color-bg-text"
                    width={54}
                    height={24}
                    padding={2}
                  />
                </div>
              );
            }
          })}
        </div>

        {Object.values(backgroundState).map((state) => {
          const {
            label,
            props,
            id: backgroundArtId,
            isActive,
          } = state;

          return (
            <fieldset>
              <legend className="body font-weight-6 uppercase condensed pad-2-b">
                {label}
              </legend>
              {Object.entries(props).map(([stateKey, prop]) => {
                const {
                  label: propLabel,
                  input,
                  value,
                } = prop;

                if (input === 'incrementNumber') {
                  const { min, max } = prop;
                  return (
                    <div className="pad-2-tb">
                      <div>
                        {propLabel}
                      </div>
                      <div>
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => updateBackgroundState(backgroundArtId, stateKey, e.target.value)}
                        />
                      </div>
                    </div>
                  );
                }

                if (input === 'checkbox') {
                  const { labelValueMap } = prop;
                  return (
                    <div className="pad-2-tb">
                      <div>{propLabel}</div>
                      {Object.entries(labelValueMap).map(([checkboxLabel, checkboxValue]) => {
                        const checked = value.includes(checkboxValue);
                        const handleChange = () => {
                          let updated = [...value];
                          if (checked) updated = updated.filter((v) => v !== checkboxValue);
                          else updated.push(checkboxValue);
                          updateBackgroundState(backgroundArtId, stateKey, updated);
                        }
                        return (
                          <div className="pad-1-tb flex flex-align-center flex-justify-between">
                            {checkboxLabel}
                            <SimpleToggleSwitch
                              isOn={checked}
                              onClick={handleChange}
                              className={`${checked ? 'color-bg-surface-secondary' : 'color-bg-surface'} border-1 color-border-primary`}
                              sliderClass="color-bg-text"
                              width={54}
                              height={24}
                              padding={2}
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                }

                if (input === 'switch') {
                  return (
                    <div className="pad-2-tb flex flex-align-center flex-justify-between">
                      {propLabel}
                      <SimpleToggleSwitch
                        isOn={value}
                        onClick={() => updateBackgroundState(backgroundArtId, stateKey, !value)}
                        className={`${value ? 'color-bg-surface-secondary' : 'color-bg-surface'} border-1 color-border-primary`}
                        sliderClass="color-bg-text"
                        width={54}
                        height={24}
                        padding={2}
                      />
                    </div>
                  );
                }

                if (input === 'percentage') {
                  const { min, max } = prop;
                  return (
                    <div className="pad-2-tb">
                      <div>
                        {propLabel}
                      </div>
                      <div>
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => updateBackgroundState(backgroundArtId, stateKey, e.target.value)}
                        />
                      </div>
                    </div>
                  );
                }

                if (input === 'colorPicker') {
                  const { min, max } = prop;
                  return (
                    <div className="pad-2-tb">
                      <div>
                        {propLabel}
                      </div>
                      <div>
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => updateBackgroundState(backgroundArtId, stateKey, e.target.value)}
                        />
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </fieldset>
          );
        })}
      </div>
    </>
  );
};

export default SettingsMenu;
