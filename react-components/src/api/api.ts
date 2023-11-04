import { ApiProps } from '../types/types';

const URL = 'https://swapi.dev/api/people/';

async function searchApi(
  value: string,
  query?: string
): Promise<ApiProps | void> {
  const searchQuery = `${URL}?search=${value.trim()}`;
  const newQuery = `${URL}${query}`;
  try {
    const response = await fetch(query ? newQuery : searchQuery);
    const json: ApiProps = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export default searchApi;
