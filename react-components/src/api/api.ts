import { ApiProps } from '../types/types';

async function searchApi(value: string): Promise<ApiProps | void> {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${value.trim()}`
    );
    const json: ApiProps = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export default searchApi;
