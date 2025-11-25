import { CreateUserData, ListSubjectsData, CreateReviewData, CreateReviewVariables, GetTutorProfileData, GetTutorProfileVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useListSubjects(options?: useDataConnectQueryOptions<ListSubjectsData>): UseDataConnectQueryResult<ListSubjectsData, undefined>;
export function useListSubjects(dc: DataConnect, options?: useDataConnectQueryOptions<ListSubjectsData>): UseDataConnectQueryResult<ListSubjectsData, undefined>;

export function useCreateReview(options?: useDataConnectMutationOptions<CreateReviewData, FirebaseError, CreateReviewVariables>): UseDataConnectMutationResult<CreateReviewData, CreateReviewVariables>;
export function useCreateReview(dc: DataConnect, options?: useDataConnectMutationOptions<CreateReviewData, FirebaseError, CreateReviewVariables>): UseDataConnectMutationResult<CreateReviewData, CreateReviewVariables>;

export function useGetTutorProfile(vars: GetTutorProfileVariables, options?: useDataConnectQueryOptions<GetTutorProfileData>): UseDataConnectQueryResult<GetTutorProfileData, GetTutorProfileVariables>;
export function useGetTutorProfile(dc: DataConnect, vars: GetTutorProfileVariables, options?: useDataConnectQueryOptions<GetTutorProfileData>): UseDataConnectQueryResult<GetTutorProfileData, GetTutorProfileVariables>;
