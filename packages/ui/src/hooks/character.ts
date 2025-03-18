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

const CREATE_CHARACTER_MUTATION = gql`
  mutation CreateCharacter($input: CreateCharacterInput!) {
    createCharacter(input: $input) {
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

const DELETE_CHARACTER_MUTATION = gql`
  mutation DeleteCharacter($input: DeleteCharacterInput!) {
    deleteCharacter(input: $input)
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
    try {
      const response = await updateCharacterData({ input: character });
      setLoading(false);

      if (response.error) {
        console.error('Failed to update character:', response.error);
        return undefined;
      }
    } catch (error) {
      console.error('Unexpected error while creating character:', error);
      setLoading(false);
      return undefined;
    }
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

export const useCreateCharacter = (): [
  (name: string) => Promise<ICharacter | undefined>,
  boolean,
] => {
  const [_, createCharacterData] = useMutation(CREATE_CHARACTER_MUTATION);
  const [loading, setLoading] = useState(false);

  const createCharacter = async (name: string) => {
    setLoading(true);
    try {
      const response = await createCharacterData({ input: { name } });
      setLoading(false);

      if (response.error) {
        console.error('Failed to create character:', response.error);
        return undefined;
      }

      return response.data?.createCharacter;
    } catch (error) {
      console.error('Unexpected error while creating character:', error);
      setLoading(false);
      return undefined;
    }
  };

  return [createCharacter, loading];
};

export const useDeleteCharacter = (): [
  (id: number) => Promise<boolean>,
  boolean,
] => {
  const [_, deleteCharacterData] = useMutation(DELETE_CHARACTER_MUTATION);
  const [loading, setLoading] = useState(false);

  const deleteCharacter = async (id: number): Promise<boolean> => {
    setLoading(true);
    try {
      const response = await deleteCharacterData({ input: { id } });
      setLoading(false);

      if (response.error) {
        console.error('Failed to delete character:', response.error);
        return false;
      }
    } catch (error) {
      console.error('Unexpected error while deleting character:', error);
      setLoading(false);
      return false;
    }
    return true;
  };

  return [deleteCharacter, loading];
};
