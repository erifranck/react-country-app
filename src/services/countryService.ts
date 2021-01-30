const API_PATH = 'https://restcountries.eu/rest/v2'

export interface Languages {
  name: string;
  nativeName: string;
}

export interface Country {
  name: string;
  region: string;
  capital: string;
  subregion: string;
  population: number;
  area: number;
  latlng: [number, number];
  timezones: string[];
  languages: Languages[];
  flag: string;
}

export const getCountries = async () => {
  try {
    const response = await fetch(`${API_PATH}/all`, {method: 'GET'})
    return {
      data: await response.json(),
      error: ''
    };
  } catch (error) {
    return {
      error
    };
  }
}

export const getCountry = async (countryName: string) => {
  try {
    const response = await fetch(`${API_PATH}/name/${countryName}`, {method: 'GET'})
    return {
      data: await response.json(),
      error: ''
    };
  } catch (error) {
    return {
      error
    };
  }
}
