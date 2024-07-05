import http, { RefinedResponse, ResponseType } from 'k6/http';
import { BASE_URL } from '../../utils/constants';
import { defaultHeaders } from '../../utils/helper';

export function findProducts(token: any): RefinedResponse<ResponseType> {
  const url = new URL(`${BASE_URL}/api/v1/products`);
  const headers = {
    ...defaultHeaders().headers,
    Authorization: `Bearer ${token.access_token}`
  };
  return http.get(url.toString(), { headers });
}
