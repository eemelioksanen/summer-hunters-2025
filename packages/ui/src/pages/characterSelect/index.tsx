import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BabyPorcuIcon, PlusIcon, PorcuIcon } from '../../assets';
import Meter from '../../components/Meter';
import ArrowButton from '../../components/ArrowButton';
import { porcuYearInSeconds } from '../../constants/config';
import ImageButton from '../../components/ImageButton';
import { TrashCan } from '../../assets';
import { useCreateCharacter, useDeleteCharacter } from '../../hooks/character';

import type { ICharacter } from 'shared/types';

interface ICharacterCardProps {
  character: ICharacter;
  setCharacter: (character: ICharacter) => void;
  deleteCharacter: (id: number) => void;
}

interface ICreateCharacterProps {
  createCharacter: (name: string) => void;
}

interface INameFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface ICharacterSelectProps {
  characters: ICharacter[];
  setCharacter: (character: ICharacter) => void;
}

const StyledParentDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(198, 255, 255);
  padding: 0.7rem;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledCharacterCard = styled.div<React.HTMLAttributes<HTMLDivElement>>`
  background-color: rgb(183, 255, 220);
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0.5rem;
  border-radius: 1rem;
  border: 2px solid black;
`;

const StyledDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.5rem;
  font-size: 25px;
  font-weight: bold;
  color: white;
  -webkit-text-stroke: 1px black;
`;

const StyledCharacterAgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  user-select: none;
`;

const StyledPorcuContainer = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledNameFormContainer = styled.form<INameFormProps>`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
`;

const StyledInput = styled.input<React.InputHTMLAttributes<HTMLInputElement>>`
  background-color: rgb(243, 255, 249);
  border-radius: 0.4rem;
  text-align: center;
`;

const porcuAgeInYears = (age: number) => Math.floor(age / porcuYearInSeconds);

const CharacterCard: React.FC<ICharacterCardProps> = ({
  character,
  setCharacter,
  deleteCharacter,
}) => {
  return (
    <StyledCharacterCard>
      <StyledPorcuContainer>
        {porcuAgeInYears(character.age) > 5 ? (
          <PorcuIcon width={80} />
        ) : (
          <BabyPorcuIcon width={50} />
        )}
        {character.name.slice(0, 12)}
      </StyledPorcuContainer>

      <StyledDataContainer>
        <StyledCharacterAgeContainer>
          <Meter
            type='heart'
            percentage={character.health}
            width='30'
            height='30'
          />
          <Meter
            type='lightning'
            percentage={character.energy}
            height='30'
            width='30'
          />
          <Meter
            type='cutlery'
            percentage={character.hunger}
            height='30'
            width='30'
          />
          <Meter
            type='happiness'
            percentage={character.happiness}
            height='30'
            width='30'
          />
        </StyledCharacterAgeContainer>
        <StyledCharacterAgeContainer>
          Age: {porcuAgeInYears(character.age)}
        </StyledCharacterAgeContainer>
      </StyledDataContainer>
      <StyledButtonContainer>
        <ArrowButton
          onClick={() => setCharacter(character)}
          orientation='right'
          height={50}
        />
        <ImageButton
          onClick={() => {
            deleteCharacter(character.id);
          }}
        >
          <TrashCan height={50} />
        </ImageButton>
      </StyledButtonContainer>
    </StyledCharacterCard>
  );
};

const CreateCharacterCard: React.FC<ICreateCharacterProps> = ({
  createCharacter,
}) => {
  const [isEnteringName, setIsEnteringName] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const nameString = typeof name === 'string' ? name : undefined;
    if (nameString) createCharacter(nameString);
  };
  return (
    <StyledCharacterCard>
      {isEnteringName ? (
        <StyledNameFormContainer onSubmit={handleSubmit}>
          <StyledInput name='name' maxLength={12} />
          <ImageButton type='submit'>
            <PlusIcon width={30} />
          </ImageButton>
        </StyledNameFormContainer>
      ) : (
        <ImageButton onClick={() => setIsEnteringName(true)}>
          <PlusIcon width={80} />
        </ImageButton>
      )}
    </StyledCharacterCard>
  );
};

const CharacterSelect: React.FC<ICharacterSelectProps> = ({
  characters,
  setCharacter,
}) => {
  const [currentCharacters, setCurrentCharacters] = useState(characters);

  // array of length 3 containing up to 3 characters and fill rest with null
  const characterArray = currentCharacters
    ? [...currentCharacters, null, null, null].slice(0, 3)
    : [null, null, null];

  const [createCharacter, creating] = useCreateCharacter();
  const [deleteCharacter, deleting] = useDeleteCharacter();

  const handleCreateCharacter = async (name: string) => {
    const newCharacter = await createCharacter(name);
    if (newCharacter) {
      setCurrentCharacters([...currentCharacters, newCharacter]);
    }
  };

  const handleDeleteCharacter = async (id: number) => {
    const result = await deleteCharacter(id);
    if (result) {
      setCurrentCharacters(
        currentCharacters.filter(character => character.id !== id),
      );
    }
  };

  return (
    <StyledParentDiv>
      {characterArray.map((character, index) =>
        character ? (
          <CharacterCard
            key={index}
            character={character}
            setCharacter={setCharacter}
            deleteCharacter={handleDeleteCharacter}
          />
        ) : (
          <CreateCharacterCard
            createCharacter={handleCreateCharacter}
            key={index}
          />
        ),
      )}
    </StyledParentDiv>
  );
};

export default CharacterSelect;
