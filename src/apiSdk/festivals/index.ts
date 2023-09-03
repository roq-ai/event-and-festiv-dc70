import axios from 'axios';
import queryString from 'query-string';
import { FestivalInterface, FestivalGetQueryInterface } from 'interfaces/festival';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFestivals = async (
  query?: FestivalGetQueryInterface,
): Promise<PaginatedInterface<FestivalInterface>> => {
  const response = await axios.get('/api/festivals', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createFestival = async (festival: FestivalInterface) => {
  const response = await axios.post('/api/festivals', festival);
  return response.data;
};

export const updateFestivalById = async (id: string, festival: FestivalInterface) => {
  const response = await axios.put(`/api/festivals/${id}`, festival);
  return response.data;
};

export const getFestivalById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/festivals/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFestivalById = async (id: string) => {
  const response = await axios.delete(`/api/festivals/${id}`);
  return response.data;
};
