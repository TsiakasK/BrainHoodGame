export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectId: any;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type Game_Session = {
  __typename?: 'Game_session';
  OLM?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['Int'];
  move?: Maybe<Array<Maybe<Scalars['Int']>>>;
  round: Scalars['Int'];
  scores?: Maybe<Array<Maybe<Scalars['String']>>>;
  shoot?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tcolors?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tselection?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tspots?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ttypes?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Game_SessionInsertInput = {
  OLM?: Maybe<Array<Maybe<Scalars['String']>>>;
  ttypes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  shoot?: Maybe<Array<Maybe<Scalars['Int']>>>;
  scores?: Maybe<Array<Maybe<Scalars['String']>>>;
  tselection?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id: Scalars['Int'];
  tcolors?: Maybe<Array<Maybe<Scalars['Int']>>>;
  move?: Maybe<Array<Maybe<Scalars['Int']>>>;
  round: Scalars['Int'];
  tspots?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Game_SessionQueryInput = {
  tselection?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ttypes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_exists?: Maybe<Scalars['Boolean']>;
  round_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  AND?: Maybe<Array<Game_SessionQueryInput>>;
  id_gte?: Maybe<Scalars['Int']>;
  tcolors_exists?: Maybe<Scalars['Boolean']>;
  scores_exists?: Maybe<Scalars['Boolean']>;
  shoot_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  shoot_exists?: Maybe<Scalars['Boolean']>;
  tspots_exists?: Maybe<Scalars['Boolean']>;
  round_gte?: Maybe<Scalars['Int']>;
  scores?: Maybe<Array<Maybe<Scalars['String']>>>;
  ttypes_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_lte?: Maybe<Scalars['Int']>;
  round_gt?: Maybe<Scalars['Int']>;
  tspots_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tselection_exists?: Maybe<Scalars['Boolean']>;
  round_lt?: Maybe<Scalars['Int']>;
  tspots?: Maybe<Array<Maybe<Scalars['Int']>>>;
  move_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  round?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  OLM_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tselection_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  move_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  id_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  round_ne?: Maybe<Scalars['Int']>;
  tspots_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tcolors_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_ne?: Maybe<Scalars['Int']>;
  OLM_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Game_SessionQueryInput>>;
  shoot_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  move?: Maybe<Array<Maybe<Scalars['Int']>>>;
  OLM_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  scores_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  round_exists?: Maybe<Scalars['Boolean']>;
  round_lte?: Maybe<Scalars['Int']>;
  scores_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  round_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_gt?: Maybe<Scalars['Int']>;
  OLM?: Maybe<Array<Maybe<Scalars['String']>>>;
  tcolors_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id_lt?: Maybe<Scalars['Int']>;
  ttypes_exists?: Maybe<Scalars['Boolean']>;
  shoot?: Maybe<Array<Maybe<Scalars['Int']>>>;
  move_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ttypes_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tcolors?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tselection_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export enum Game_SessionSortByInput {
  IdDesc = 'ID_DESC',
  RoundAsc = 'ROUND_ASC',
  RoundDesc = 'ROUND_DESC',
  IdAsc = 'ID_ASC'
}

export type Game_SessionUpdateInput = {
  id_inc?: Maybe<Scalars['Int']>;
  tselection?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tselection_unset?: Maybe<Scalars['Boolean']>;
  move?: Maybe<Array<Maybe<Scalars['Int']>>>;
  move_unset?: Maybe<Scalars['Boolean']>;
  id_unset?: Maybe<Scalars['Boolean']>;
  shoot_unset?: Maybe<Scalars['Boolean']>;
  tcolors_unset?: Maybe<Scalars['Boolean']>;
  tcolors?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tspots?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ttypes_unset?: Maybe<Scalars['Boolean']>;
  OLM?: Maybe<Array<Maybe<Scalars['String']>>>;
  tspots_unset?: Maybe<Scalars['Boolean']>;
  round_inc?: Maybe<Scalars['Int']>;
  OLM_unset?: Maybe<Scalars['Boolean']>;
  scores_unset?: Maybe<Scalars['Boolean']>;
  shoot?: Maybe<Array<Maybe<Scalars['Int']>>>;
  round_unset?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  scores?: Maybe<Array<Maybe<Scalars['String']>>>;
  round?: Maybe<Scalars['Int']>;
  ttypes?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyGame_sessions?: Maybe<DeleteManyPayload>;
  deleteOneGame_session?: Maybe<Game_Session>;
  insertManyGame_sessions?: Maybe<InsertManyPayload>;
  insertOneGame_session?: Maybe<Game_Session>;
  replaceOneGame_session?: Maybe<Game_Session>;
  updateManyGame_sessions?: Maybe<UpdateManyPayload>;
  updateOneGame_session?: Maybe<Game_Session>;
  upsertOneGame_session?: Maybe<Game_Session>;
};


export type MutationDeleteManyGame_SessionsArgs = {
  query?: Maybe<Game_SessionQueryInput>;
};


export type MutationDeleteOneGame_SessionArgs = {
  query: Game_SessionQueryInput;
};


export type MutationInsertManyGame_SessionsArgs = {
  data: Array<Game_SessionInsertInput>;
};


export type MutationInsertOneGame_SessionArgs = {
  data: Game_SessionInsertInput;
};


export type MutationReplaceOneGame_SessionArgs = {
  query?: Maybe<Game_SessionQueryInput>;
  data: Game_SessionInsertInput;
};


export type MutationUpdateManyGame_SessionsArgs = {
  query?: Maybe<Game_SessionQueryInput>;
  set: Game_SessionUpdateInput;
};


export type MutationUpdateOneGame_SessionArgs = {
  set: Game_SessionUpdateInput;
  query?: Maybe<Game_SessionQueryInput>;
};


export type MutationUpsertOneGame_SessionArgs = {
  query?: Maybe<Game_SessionQueryInput>;
  data: Game_SessionInsertInput;
};


export type Query = {
  __typename?: 'Query';
  game_session?: Maybe<Game_Session>;
  game_sessions: Array<Maybe<Game_Session>>;
};


export type QueryGame_SessionArgs = {
  query?: Maybe<Game_SessionQueryInput>;
};


export type QueryGame_SessionsArgs = {
  query?: Maybe<Game_SessionQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<Game_SessionSortByInput>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type InsertManySessionsMutationVariables = Exact<{
  data: Array<Game_SessionInsertInput>;
}>;


export type InsertManySessionsMutation = (
  { __typename?: 'Mutation' }
  & { insertManyGame_sessions?: Maybe<(
    { __typename?: 'InsertManyPayload' }
    & Pick<InsertManyPayload, 'insertedIds'>
  )> }
);
