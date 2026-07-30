import { createContext, useContext, useState } from 'react';
import { getState as movingParticlesState } from '../BackgroundArt/MovingParticles';

export const HomeContext = createContext({
  backgroundState: {},
  updateBackgroundState: () => {},
});

export const useHomeContext = () => useContext(HomeContext);

const getInitialBackgroundState = () => {
  const movingParticles = movingParticlesState();

  return {
    [movingParticles.id]: movingParticles,
  };
}

export const useHomeContextState = () => {
  const [backgroundState, setBackgroundState] = useState(getInitialBackgroundState());

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
    backgroundState,
    updateBackgroundState,
  };
};
