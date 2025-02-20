import { renderFilmDetails } from "./swapiHelper.mjs";

const params = new URLSearchParams(window.location.search);
const filmId = params.get("filmId");

renderFilmDetails(filmId, '.movieDetails');
