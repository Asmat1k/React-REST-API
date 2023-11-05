import { ApiProps } from '../types/types';

const URL = 'https://swapi.dev/api/people/';

async function searchApi(
  query: string = `?search=${localStorage.getItem('lastSearch')!}?page=1`
): Promise<ApiProps | void> {
  const request = `${URL}${query}`;
  try {
    const response = await fetch(request);
    const json: ApiProps = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export default searchApi;
