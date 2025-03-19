import React, { useState } from 'react';
import styled from 'styled-components';

import Game from '../game';
import CharacterSelect from '../characterSelect';
import GreetingScreen from '../greetingScreen';
import { Frame } from '../../assets';
import { Screen } from '../../components/Screen';
import { useGetCharacters } from '../../hooks/character';

import type { ICharacter } from 'shared/types';

const StyledHome = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5fbff;
`;

const StyledLoadingScreen = styled.div`
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #e5fbff;
  align-items: center;
`;

const LoadingScreen = ({ text }: { text: string }) => (
  <StyledHome>
    <Screen>
      <StyledLoadingScreen>{text}</StyledLoadingScreen>
    </Screen>
    <Frame width={800} />
  </StyledHome>
);

export const Home: React.FC = () => {
  const [character, setCharacter] = useState<ICharacter | undefined>(undefined);
  const [playingGame, setPlayingGame] = useState(false);
  const [characters, fetching] = useGetCharacters();

  const playGame = () => setPlayingGame(true);
  const quitGame = () => setCharacter(undefined);

  if (fetching) return <LoadingScreen text='Loading...' />;
  else if (!characters)
    return <LoadingScreen text='Failed to fetch characters :(' />;

  return (
    <StyledHome>
      <Screen>
        {character && playingGame && (
          <Game quit={quitGame} character={character} />
        )}
        {!character && characters && playingGame && (
          <CharacterSelect
            characters={characters}
            setCharacter={setCharacter}
          />
        )}
        {!playingGame && (
          <GreetingScreen playGame={playGame} text='Porcugotchi' />
        )}
      </Screen>
      <Frame width={800} />
    </StyledHome>
  );
};
