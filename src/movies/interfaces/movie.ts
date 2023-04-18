export interface Movie {
  adult: Boolean;
  backdrop_path: string;
  genre_ids: string;
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  video: Boolean;
  vote_average: string;
  vote_count: string;
  title: string;
  results: [
    adult: Boolean,
    backdrop_path: string,
    genre_ids: string,
    id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: string,
    poster_path: string,
    release_date: string,
    video: Boolean,
    vote_average: string,
    vote_count: string
  ];
}

export interface Rating {
  Source: string;
  Value: string;
}
