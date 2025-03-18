import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import BabyPorcu from '../../components/BabyPorcu';
import Porcu from '../../components/Porcu';
import Controls from '../../components/Controls';
import { Burger, Sleep, HeartIcon } from '../../assets';
import ImageButton from '../../components/ImageButton';
import { porcuYearInSeconds } from '../../constants/config';
import { useUpdateCharacter } from '../../hooks/character';

import type { ICharacter, IGameState } from 'shared/types';
import type { IRoom } from '../../types/types';

const StyledGameDiv = styled.div`
  height: 100%;
`;

const rooms: IRoom[] = ['bedroom', 'kitchen', 'livingroom'];

export interface IGameProps {
  character: ICharacter;
  quit: () => void;
}

const Game: React.FC<IGameProps> = ({ character, quit }) => {
  const [age, setAge] = useState(character.age);
  const [happiness, setHappiness] = useState(character.happiness);
  const [health, setHealth] = useState(character.health);
  const [hunger, setHunger] = useState(character.hunger);
  const [energy, setEnergy] = useState(character.energy);
  const [roomIdx, setRoomIdx] = useState(0);

  const [sleeping, setSleeping] = useState(false);
  const [petting, setPetting] = useState(false);
  const [eating, setEating] = useState(false);

  const [updateCharacter, updating] = useUpdateCharacter();

  const gameState: IGameState = {
    age,
    happiness,
    health,
    hunger,
    energy,
  };

  const goLeft = () => {
    if (!sleeping) setRoomIdx(roomIdx == 0 ? rooms.length - 1 : roomIdx - 1);
  };

  const goRight = () => {
    if (!sleeping) setRoomIdx((roomIdx + 1) % rooms.length);
  };

  const eat = () => {
    const foodValue = 20;

    if (eating || sleeping || hunger >= 90) return;
    setEating(true);

    setHunger(prevHunger => Math.min(prevHunger + foodValue, 100));
    setHappiness(prevHappiness => Math.min(prevHappiness + foodValue / 5, 100));
    setHealth(prevHealth => Math.min(prevHealth + foodValue / 5, 100));

    setTimeout(() => {
      setEating(false);
    }, 2000);
  };

  const toggleSleep = () => {
    setSleeping(prevSleeping => !prevSleeping);
  };

  const pet = () => {
    if (petting || energy <= 20) return;

    setPetting(true);
    setHappiness(prevHappiness => Math.min(prevHappiness + 20, 100));
    setEnergy(prevEnergy => Math.max(prevEnergy - 10, 0));

    setTimeout(() => {
      setPetting(false);
    }, 2000);
  };

  const saveProgress = () => {
    updateCharacter({
      id: character.id,
      name: character.name,
      age,
      health,
      hunger,
      happiness,
      energy,
    });
  };

  // game tick
  useEffect(() => {
    const interval = setInterval(() => {
      if (sleeping) {
        setEnergy(prevEnergy => Math.min(prevEnergy + 5, 100));
        setHealth(prevHealth => Math.min(prevHealth + 1, 100));
      } else {
        setEnergy(prevEnergy => Math.max(prevEnergy - 1, 0));
      }
      setAge(prevAge => prevAge + 1);

      // if hunger at 0, lose health
      setHunger(prevHunger => {
        const newHunger = prevHunger - 1;
        if (newHunger <= 0)
          setHealth(prevHealth => Math.max(prevHealth - 3, 0));
        return Math.max(newHunger, 0);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [sleeping]);

  const room = rooms[roomIdx];
  const porcuAgeInYears = Math.floor(age / porcuYearInSeconds);

  return (
    <StyledGameDiv>
      <Background room={room} />
      <Controls
        {...gameState}
        goLeft={goLeft}
        goRight={goRight}
        saveGame={saveProgress}
        quitGame={quit}
      >
        {room == 'kitchen' && !eating && (
          <ImageButton onClick={eat}>
            <Burger />
          </ImageButton>
        )}
        {room == 'bedroom' && (
          <ImageButton onClick={toggleSleep}>
            <Sleep width={60} />
          </ImageButton>
        )}
        {room == 'livingroom' && (
          <ImageButton onClick={pet}>
            <HeartIcon width={60} />
          </ImageButton>
        )}
      </Controls>
      {porcuAgeInYears > 5 ? (
        <Porcu
          sleep={sleeping}
          eat={eating}
          happy={petting}
          animationDuration={sleeping ? 4 : 2}
          animate
          size={200}
          x={120}
          y={170}
        />
      ) : (
        <BabyPorcu
          sleep={sleeping}
          eat={eating}
          happy={petting}
          animate
          animationDuration={sleeping ? 4 : 1}
          size={120}
          x={180}
          y={250}
        />
      )}
    </StyledGameDiv>
  );
};

export default Game;
