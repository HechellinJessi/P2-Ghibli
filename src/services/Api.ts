import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ghibliapi.vercel.app',
});

export async function fetchFilms(): Promise<Film[]> {
  try {
    const response = await api.get('/films');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchFilmById(id:string): Promise<Film[]> {
  try {
    const response = await api.get(`/films/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export interface Film {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
}
