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

const FOOD_VALUE = 20;
const MAX_HUNGER = 100;
const MAX_HAPPINESS = 100;
const MAX_HEALTH = 100;
const MAX_ENERGY = 100;
const STOMACH_FULL_THRESHOLD = 90;
const PREVENT_PETTING_ENERGY_THRESHOLD = 20;
const HUNGER_HAPPINESS_DRAIN_THRESHOLD = 30;
const HUNGER_HEALTH_DRAIN_THRESHOLD = 0;
const PORCU_ADULT_AGE = 5; // in years

const Game: React.FC<IGameProps> = ({ character, quit }) => {
  const [characterStats, setCharacterStats] = useState<ICharacter>(character);
  const [roomIdx, setRoomIdx] = useState(0);

  const [sleeping, setSleeping] = useState(false);
  const [petting, setPetting] = useState(false);
  const [eating, setEating] = useState(false);

  const room = rooms[roomIdx];
  const porcuAgeInYears = Math.floor(characterStats.age / porcuYearInSeconds);

  const [updateCharacter, updating] = useUpdateCharacter();

  const goLeft = () => {
    if (!sleeping) setRoomIdx(roomIdx == 0 ? rooms.length - 1 : roomIdx - 1);
  };

  const goRight = () => {
    if (!sleeping) setRoomIdx((roomIdx + 1) % rooms.length);
  };

  const eat = () => {
    if (eating || sleeping || characterStats.hunger >= STOMACH_FULL_THRESHOLD)
      return;
    setEating(true);

    setCharacterStats(prevStats => ({
      ...prevStats,
      hunger: Math.min(prevStats.hunger + FOOD_VALUE, MAX_HUNGER),
      happiness: Math.min(prevStats.happiness + FOOD_VALUE / 5, MAX_HAPPINESS),
      health: Math.min(prevStats.health + FOOD_VALUE / 5, MAX_HEALTH),
    }));

    setTimeout(() => {
      setEating(false);
    }, 2000);
  };

  const toggleSleep = () => {
    setSleeping(prevSleeping => !prevSleeping);
  };

  const pet = () => {
    if (petting || characterStats.energy <= PREVENT_PETTING_ENERGY_THRESHOLD)
      return;

    setPetting(true);
    setCharacterStats(prevStats => ({
      ...prevStats,
      happiness: Math.min(prevStats.happiness + 20, MAX_HAPPINESS),
      energy: Math.max(prevStats.energy - 10, 0),
    }));

    setTimeout(() => {
      setPetting(false);
    }, 2000);
  };

  const saveProgress = () => {
    updateCharacter({
      id: character.id,
      name: character.name,
      age: characterStats.age,
      health: characterStats.health,
      hunger: characterStats.hunger,
      happiness: characterStats.happiness,
      energy: characterStats.energy,
    });
  };

  // game tick
  useEffect(() => {
    const interval = setInterval(() => {
      setCharacterStats(prevStats => {
        const newStats = { ...prevStats };
        if (sleeping) {
          newStats.energy = Math.min(newStats.energy + 5, MAX_ENERGY);
          newStats.happiness = Math.min(newStats.happiness + 1, MAX_HAPPINESS);
        } else {
          newStats.energy = Math.max(newStats.energy - 1, 0);
        }
        newStats.age = newStats.age + 1;

        newStats.hunger = Math.max(newStats.hunger - 1, 0);
        // Decrease happiness if hunger is below a certain threshold
        if (newStats.hunger <= 0) {
          newStats.health = Math.max(newStats.health - 3, 0);
        }
        // Decrease happiness if hunger is below a certain threshold
        if (newStats.hunger <= HUNGER_HAPPINESS_DRAIN_THRESHOLD) {
          newStats.happiness = Math.max(newStats.happiness - 1, 0);
        }
        // Decrease health if hunger is below a certain threshold
        if (newStats.hunger <= HUNGER_HEALTH_DRAIN_THRESHOLD) {
          newStats.health = Math.max(newStats.health - 1, 0);
        }
        return newStats;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [sleeping]);

  return (
    <StyledGameDiv>
      <Background room={room} />
      <Controls
        {...characterStats}
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
      {porcuAgeInYears > PORCU_ADULT_AGE ? (
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
