export interface SearchInt {
  value: string;
}

export interface ApiProps {
  count: number;
  next: string;
  previous: string;
  results: ApiItem[];
}

export interface ApiItem {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
}
