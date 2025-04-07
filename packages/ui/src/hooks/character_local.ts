import Cookies from 'universal-cookie';
import type { ICharacter } from 'shared/types';

const cookies = new Cookies();

export const useCreateCharacter = (): [
  (name: string) => ICharacter | undefined,
  boolean,
] => {
  const createCharacter = (name: string) => {
    try {
      const characters = cookies.get('characters') || [];
      const newCharacter: ICharacter = {
        id: characters.length + 1,
        name: name,
        age: 0,
        health: 50,
        hunger: 50,
        happiness: 50,
        energy: 50,
      };
      characters.push(newCharacter);

      cookies.set('characters', characters, { path: '/' });
      return newCharacter;
    } catch (error) {
      console.error('Unexpected error while creating character:', error);
      return undefined;
    }
  };

  return [createCharacter, false];
};

export const useGetCharacters = (): [ICharacter[] | undefined, boolean] => {
  const characters = cookies.get('characters') || [];

  return [characters, false];
};

export const useDeleteCharacter = (): [(id: number) => boolean, boolean] => {
  const deleteCharacter = (id: number) => {
    try {
      const characters = cookies.get('characters') || [];

      const newCharacters = characters.filter(
        (character: ICharacter) => character.id !== id,
      );

      cookies.set('characters', newCharacters, { path: '/' });
      return true;
    } catch (error) {
      console.error('Unexpected error while deleting character:', error);
      return false;
    }
  };

  return [deleteCharacter, false];
};

export const useUpdateCharacter = (): [
  (character: ICharacter) => void,
  boolean,
] => {
  const updateCharacter = async (character: ICharacter) => {
    try {
      const characters = cookies.get('characters') || [];

      const updatedCharacters = characters.map((c: ICharacter) =>
        c.id === character.id ? { ...c, ...character } : c,
      );

      cookies.set('characters', updatedCharacters, { path: '/' });
    } catch (error) {
      console.error('Unexpected error while creating character:', error);
      return undefined;
    }
  };

  return [updateCharacter, false];
};
