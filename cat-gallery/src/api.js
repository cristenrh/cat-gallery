const urls = [

    // "https://swapi.dev/api/films/4",
    "https://content.schwab.com/c2/UIE_codetest/data.json",

  ]

  export const fetchData = async () => {
    try {
      const response = await Promise.all(
        urls.map(url => fetch(url).then(res => res.json()))
      );

      return response;
    } catch (error) {
      console.log("Error", error);
    }
  };