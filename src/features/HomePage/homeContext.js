import { createContext, useContext, useState } from 'react';
import { useSectionScroller } from '@billyjb3/global-react';
import { getState as movingParticlesState } from '../BackgroundArt/MovingParticles';
import { getState as particleWavesState } from '../BackgroundArt/ParticleWaves';

export const HomeContext = createContext({
  backgroundState: {},
  updateBackgroundState: () => {},
  pageSettings: {},
  sectionScroller: {},
});

export const useHomeContext = () => useContext(HomeContext);

const getInitialBackgroundState = () => {
  const movingParticles = movingParticlesState();
  // const particleWaves = particleWavesState();

  return {
    [movingParticles.id]: movingParticles,
    // [particleWaves.id]: particleWaves,
  };
}

// TODO: make another settings section for the animated page dividers and make some more variations
export const useHomeContextState = () => {
  const [backgroundState, setBackgroundState] = useState(getInitialBackgroundState());
  const sectionScroller = useSectionScroller();

  const [pageSettings, setPageSettings] = useState({
    showAnimations: {
      value: true,
      input: 'switch',
      label: 'Show Animations',
    }
  });

  const updatePageSetting = (key, value) => {
    setPageSettings({
      ...pageSettings,
      [key]: {
        ...pageSettings[key],
        value,
      },
    });
  };

  const updateBackgroundState = (id, stateKey, value) => {
    setBackgroundState({
      ...backgroundState,
      [id]: {
        ...backgroundState[id],
        props: {
          ...backgroundState[id].props,
          [stateKey]: {
            ...backgroundState[id].props[stateKey],
            value,
          },
        },
      },
    });
  };

  return {
    pageSettings,
    updatePageSetting,
    backgroundState,
    updateBackgroundState,
    sectionScroller,
  };
};
