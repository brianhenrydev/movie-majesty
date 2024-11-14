import { generateMovieHTML } from "./movie-converter.js";
import { renderMoviesToDOM } from "./movie-render.js";

const movieHTML = generateMovieHTML();
renderMoviesToDOM(movieHTML);
