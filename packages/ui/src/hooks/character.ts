import { gql, useMutation, useQuery } from 'urql';
import { ICharacter } from 'shared/types';
import { useState } from 'react';

const UPDATE_CHARACTER_MUTATION = gql`
  mutation UpdateCharacter($input: UpdateCharacterInput!) {
    updateCharacter(input: $input) {
      id
      name
      age
      health
      hunger
      happiness
      energy
    }
  }
`;

const GETALL_QUERY = gql`
  query GetCharacters {
    characters {
      id
      name
      age
      health
      hunger
      happiness
      energy
    }
  }
`;

export const useUpdateCharacter = (): [
  (character: ICharacter) => void,
  boolean,
] => {
  const [_, updateCharacterData] = useMutation(UPDATE_CHARACTER_MUTATION);
  const [loading, setLoading] = useState(false);

  const updateCharacter = async (character: ICharacter) => {
    setLoading(true);
    await updateCharacterData({ input: character });
    setLoading(false);
  };

  return [updateCharacter, loading];
};

export const useGetCharacters = (): [ICharacter[] | undefined, boolean] => {
  const [result] = useQuery<{ characters: ICharacter[] }>({
    query: GETALL_QUERY,
    requestPolicy: 'network-only',
  });

  return [result.data?.characters, result.fetching];
};
