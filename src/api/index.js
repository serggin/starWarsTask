const baseURL = 'https://swapi.dev/api/films/';

const fetchHelper = (url) => {
  const request = new Request(url);
  return (
    fetch(request)
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        return response.text().then((text) => {
          console.error('error response=', text);
          throw new Error(text);
        });
      }
    })
    .then((text) => JSON.parse(text))
      .catch((error) => {
        console.error(error);
        throw error;
      })
  );
}

export const fetchFilms = () => {
  const url = baseURL;
  return fetchHelper(url);
}

export const fetchFilm = (id) => {
  const url = baseURL + `${id}/`;
  return fetchHelper(url);
}