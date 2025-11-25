import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateReviewData {
  review_insert: Review_Key;
}

export interface CreateReviewVariables {
  sessionId: UUIDString;
  studentId: UUIDString;
  tutorProfileId: UUIDString;
  rating: number;
  comment?: string | null;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface GetTutorProfileData {
  tutorProfile?: {
    id: UUIDString;
    userId: UUIDString;
    availability?: string | null;
    experience?: string | null;
    hourlyRate: number;
    qualifications?: string | null;
  } & TutorProfile_Key;
}

export interface GetTutorProfileVariables {
  id: UUIDString;
}

export interface ListSubjectsData {
  subjects: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & Subject_Key)[];
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface Session_Key {
  id: UUIDString;
  __typename?: 'Session_Key';
}

export interface Subject_Key {
  id: UUIDString;
  __typename?: 'Subject_Key';
}

export interface TutorProfile_Key {
  id: UUIDString;
  __typename?: 'TutorProfile_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface ListSubjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSubjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListSubjectsData, undefined>;
  operationName: string;
}
export const listSubjectsRef: ListSubjectsRef;

export function listSubjects(): QueryPromise<ListSubjectsData, undefined>;
export function listSubjects(dc: DataConnect): QueryPromise<ListSubjectsData, undefined>;

interface CreateReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
  operationName: string;
}
export const createReviewRef: CreateReviewRef;

export function createReview(vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;
export function createReview(dc: DataConnect, vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;

interface GetTutorProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetTutorProfileVariables): QueryRef<GetTutorProfileData, GetTutorProfileVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetTutorProfileVariables): QueryRef<GetTutorProfileData, GetTutorProfileVariables>;
  operationName: string;
}
export const getTutorProfileRef: GetTutorProfileRef;

export function getTutorProfile(vars: GetTutorProfileVariables): QueryPromise<GetTutorProfileData, GetTutorProfileVariables>;
export function getTutorProfile(dc: DataConnect, vars: GetTutorProfileVariables): QueryPromise<GetTutorProfileData, GetTutorProfileVariables>;

