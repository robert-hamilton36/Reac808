import React from 'react'
import useSound from 'use-sound'
import Button from './Button'

const useKeyboardBindings = map => {
    React.useEffect(() => {
      const handlePress = ev => {
        const handler = map[ev.key];
  
        if (typeof handler === 'function') {
          handler();
        }
      };
  
      window.addEventListener('keydown', handlePress);
  
      return () => {
        window.removeEventListener('keydown', handlePress);
      };
    }, [map]);
  };

function Demo() {
    const soundUrl = './909-drums.mp3';
  
    const [play] = useSound(soundUrl, {
      sprite: {
        kick: [0, 350],
        hihat: [374, 160],
        snare: [666, 290],
        cowbell: [968, 200],
      }
    });
  
    // Custom hook that listens for 'keydown',
    // and calls the appropriate handler function.
    useKeyboardBindings({
      1: () => play({ id: 'kick' }),
      2: () => play({ id: 'hihat' }),
      3: () => play({ id: 'snare' }),
      4: () => play({ id: 'cowbell' }),
    })
  
    return (
      <>
        <Button
          aria-label="kick"
          onMouseDown={() => play({ id: 'kick' })}
        >
          1
        </Button>
        <Button
          aria-label="hihat"
          onMouseDown={() => play({ id: 'hihat' })}
        >
          2
        </Button>
        <Button
          aria-label="snare"
          onMouseDown={() => play({ id: 'snare' })}
        >
          3
        </Button>
        <Button
          aria-label="cowbell"
          onMouseDown={() => play({ id: 'cowbell' })}
        >
          4
        </Button>
      </>
    );
  }

  export default Demo