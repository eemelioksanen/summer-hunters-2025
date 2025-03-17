import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Background from '../../components/Background';
import BabyPorcu from '../../components/BabyPorcu';
import Porcu from '../../components/Porcu';
import Controls from '../../components/Controls';
import { Burger, Sleep, BabyPorcuIcon } from '../../assets';
import ImageButton from '../../components/ImageButton';
import { porcuYearInSeconds } from '../../constants/config';
import { useUpdateCharacter } from '../../hooks/character';

import type { ICharacter, IGameState } from 'shared/types';
import type { IRoom } from '../../types/types';

const StyledGameDiv = styled.div`
  height: 100%;
`;

const rooms: IRoom[] = ['bedroom', 'kitchen', 'livingroom'];

const Game = ({ character }: { character: ICharacter }) => {
  const [age, setAge] = useState(character.age);
  const [happiness, setHappiness] = useState(character.happiness);
  const [health, setHealth] = useState(character.health);
  const [hunger, setHunger] = useState(character.hunger);
  const [energy, setEnergy] = useState(character.energy);
  const [roomIdx, setRoomIdx] = useState(0);
  const [sleeping, setSleeping] = useState(false);

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
    if (sleeping || hunger >= 100) return;
    setHunger(prevHunger => Math.min(prevHunger + foodValue, 100));
    setHappiness(prevHappiness => Math.min(prevHappiness + foodValue / 5, 100));
    setHealth(prevHealth => Math.min(prevHealth + foodValue / 5, 100));
  };

  const toggleSleep = () => {
    setSleeping(prevSleeping => !prevSleeping);
  };

  const play = () => {
    if (energy > 20) {
      setHappiness(prevHappiness => Math.min(prevHappiness + 20, 100));
      setEnergy(prevEnergy => Math.max(prevEnergy - 20, 0));
    }
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

  // sleeping effects
  useEffect(() => {
    if (sleeping) {
      const interval = setInterval(() => {
        setEnergy(prevEnergy => Math.min(prevEnergy + 4, 100));
        setHealth(prevHealth => Math.min(prevHealth + 0.5, 100));
      }, 2000);

      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        setEnergy(prevEnergy => Math.max(prevEnergy - 1, 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [sleeping]);

  // hunger loss
  useEffect(() => {
    const interval = setInterval(() => {
      setHunger(prevHunger => Math.max(prevHunger - 1, 0));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // aging
  useEffect(() => {
    const interval = setInterval(() => {
      setAge(prevAge => prevAge + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const room = rooms[roomIdx];
  const porcuAgeInYears = Math.floor(age / porcuYearInSeconds);

  return (
    <StyledGameDiv>
      <Background room={room} />
      <Controls {...gameState} goLeft={goLeft} goRight={goRight}>
        {room == 'kitchen' && (
          <ImageButton onClick={eat}>
            <Burger />
          </ImageButton>
        )}
        {room == 'bedroom' && (
          <ImageButton onClick={toggleSleep}>
            <Sleep />
          </ImageButton>
        )}
        {room == 'livingroom' && (
          <ImageButton onClick={saveProgress}>
            <BabyPorcuIcon />
          </ImageButton>
        )}
      </Controls>
      {porcuAgeInYears > 5 ? (
        <Porcu
          sleep={sleeping}
          animationSpeed={sleeping ? 4 : 1.8}
          animate
          size={200}
          x={120}
          y={170}
        />
      ) : (
        <BabyPorcu
          sleep={sleeping}
          animate
          animationSpeed={sleeping ? 4 : 1}
          size={120}
          x={180}
          y={250}
        />
      )}
    </StyledGameDiv>
  );
};

export default Game;
