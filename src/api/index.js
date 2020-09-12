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

const delay= 1000;

export const fetchFilm = (id) => {
  const url = baseURL + `${id}/`;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetchHelper(url)
        .then(response => {resolve(response)})
        .catch(error => reject(error));
    }, delay);
  });
}

export const sendReview = ({filmId, username, email, review}) => {
  console.log('sendReview()', {filmId, username, email, review});
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
