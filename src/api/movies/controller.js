const Item = require("./schema/schema");
const fetch = require("node-fetch");

const getMovies = async (request, response) => {
  try {
    const { page } = request.query;
    const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzI5OGM4ZTkyMTJkYjdmMTM5MmYxZTY3ZDk5ZmRkNiIsInN1YiI6IjYyMjI2NjY4NWEwN2Y1MDA3MmY2NDQ5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XWRC-HRafzY6PxtT45APsjCGhnECgoaEikLPWZHgCZM",
      },
    };

    console.log("url", options);

    const apiResponse = await fetch(url, options);
    console.log("apiResponse", apiResponse.status);
    if (!apiResponse.ok) {
      throw new Error(`HTTP error! Status: ${apiResponse.status}`);
    }

    const jsonData = await apiResponse.json();
    response.json(jsonData);
  } catch (err) {
    console.error("Error:", err);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getMovies,
};
