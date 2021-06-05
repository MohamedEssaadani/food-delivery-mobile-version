const API_TOKEN = "07a6007c9bbe5527dd7b5b3505d6ac8d"

function getFilmsByText(text) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}`

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error(err))
}

function getImageFromApi(name) {
  return "https://image.tmdb.org/t/p/w300" + name
}

function getFilmDetailFromApi(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`
  )
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
export { getFilmsByText, getImageFromApi, getFilmDetailFromApi }
