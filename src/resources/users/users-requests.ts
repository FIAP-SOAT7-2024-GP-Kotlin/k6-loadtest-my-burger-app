import http, { RefinedResponse, ResponseType } from 'k6/http';
import { BASE_URL } from '../../utils/constants';
import { UserAuthenticationRequest, UserCreationRequest } from '../types';
import { defaultHeaders } from '../../utils/helper';

export function findUserById(id: string): RefinedResponse<ResponseType> {
  return http.get(`${BASE_URL}/users/${id}`);
}

export function createUser(payload: UserCreationRequest): RefinedResponse<ResponseType> {
  const url = new URL(`${BASE_URL}/api/v1/users`);
  const headers = defaultHeaders();
  return http.post(url.toString(), JSON.stringify(payload), headers);
}

export function authenticate(payload: UserAuthenticationRequest): RefinedResponse<ResponseType> {
  const url = new URL(`${BASE_URL}/api/v1/auth`);
  const headers = defaultHeaders();
  return http.post(url.toString(), JSON.stringify(payload), headers);
}
