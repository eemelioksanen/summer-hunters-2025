import React from 'react';
import { createClient, Provider, fetchExchange } from 'urql';

const client = createClient({
  url: 'http://localhost:3000',
  exchanges: [fetchExchange],
});

interface GraphqlProviderProps {
  children: React.ReactNode;
}

export const GraphqlProvider: React.FC<GraphqlProviderProps> = ({
  children,
}) => <Provider value={client}>{children}</Provider>;
