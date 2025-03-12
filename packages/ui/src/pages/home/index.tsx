import React from 'react';
import { gql, useQuery } from 'urql';
import styled from 'styled-components';

import { Frame } from '../../assets';
import { Screen } from '../../components/Screen';
import Porcu from '../../components/Characters/Porcu';
import BabyPorcu from '../../components/Characters/BabyPorcu';
import Controls from '../../components/Controls';

const query = gql`
  query GetCharacters {
    characters {
      name
    }
  }
`;

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
  // TODO: proper types, maybe shared with backend
  const [result] = useQuery<{ characters: { name: string }[] }>({ query });

  if (result.fetching) {
    return <>TODO: handle loading</>;
  }

  if (!result.data) {
    return <>TODO: handle no data</>;
  }

  return (
    <StyledHome>
      <Screen>
        <Controls />
        <BabyPorcu animate size={120} animationSpeed={1} x={250} y={250} />
        <Porcu animate size={200} animationSpeed={1} x={50} y={170} />
      </Screen>
      <Frame width={800} />
    </StyledHome>
  );
};
