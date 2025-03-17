import { buildSchema } from 'graphql';
import { Context } from '../types/global';
import { ICharacter } from 'shared/types';

export const graphQLSchema = buildSchema(`
  type Character {
    id: Int!
    name: String!
    age: Int!
    energy: Int!
    hunger: Int!
    happiness: Int!
    health: Int!
  }

  type Query {
    characters: [Character]
  }

  input UpdateCharacterInput {
    id: Int!
    name: String
    age: Int
    energy: Int
    hunger: Int
    happiness: Int
    health: Int
  }

  type Mutation {
    updateCharacter(input: UpdateCharacterInput): Character
  }
`);

// Passing in ctx to all resolvers for dependency injection
// All resolvers have access to all handlers and globals
export const createResolvers = (ctx: Context) => ({
  characters: () => ctx.handlers.character.getAll(ctx, {}),
  updateCharacter: ({ input }: { input: ICharacter }) =>
    ctx.handlers.character.update(ctx, input),
});
