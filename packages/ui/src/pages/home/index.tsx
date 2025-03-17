import React from 'react';
import styled from 'styled-components';
import { useGetCharacters } from '../../hooks/character';

import { Frame } from '../../assets';
import { Screen } from '../../components/Screen';
import Game from '../game';

const StyledHome = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5fbff;
`;

export const Home: React.FC = () => {
  const [characters, fetching] = useGetCharacters();

  if (fetching) {
    return <>TODO: handle loading</>;
  }

  if (!characters) {
    return <>TODO: handle no data</>;
  }
  const character = characters[0];
  return (
    <StyledHome>
      <Screen>{character && <Game character={character} />}</Screen>
      <Frame width={800} />
    </StyledHome>
  );
};
