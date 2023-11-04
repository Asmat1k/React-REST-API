import { ApiProps } from '../types/types';

async function searchApi(
  value: string,
  pagination?: string
): Promise<ApiProps | void> {
  const URL = `https://swapi.dev/api/people/?search=${value.trim()}`;
  try {
    const response = await fetch(pagination ? pagination : URL);
    const json: ApiProps = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export default searchApi;
