import * as Types from './types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export const InsertManySessionsDocument = gql`
    mutation insertManySessions($data: [Game_sessionInsertInput!]!) {
  insertManyGame_sessions(data: $data) {
    insertedIds
  }
}
    `;
export type InsertManySessionsMutationFn = ApolloReactCommon.MutationFunction<Types.InsertManySessionsMutation, Types.InsertManySessionsMutationVariables>;

/**
 * __useInsertManySessionsMutation__
 *
 * To run a mutation, you first call `useInsertManySessionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertManySessionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertManySessionsMutation, { data, loading, error }] = useInsertManySessionsMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useInsertManySessionsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Types.InsertManySessionsMutation, Types.InsertManySessionsMutationVariables>) {
        return ApolloReactHooks.useMutation<Types.InsertManySessionsMutation, Types.InsertManySessionsMutationVariables>(InsertManySessionsDocument, baseOptions);
      }
export type InsertManySessionsMutationHookResult = ReturnType<typeof useInsertManySessionsMutation>;
export type InsertManySessionsMutationResult = ApolloReactCommon.MutationResult<Types.InsertManySessionsMutation>;
export type InsertManySessionsMutationOptions = ApolloReactCommon.BaseMutationOptions<Types.InsertManySessionsMutation, Types.InsertManySessionsMutationVariables>;