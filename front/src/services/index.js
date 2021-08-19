import axios from 'axios';

let tokenSource;
// eslint-disable-next-line import/prefer-default-export
export const fetchData = async (keyword) => {
  try {
    if (typeof tokenSource !== typeof undefined) {
      tokenSource.cancel('Operation canceled due to new request.');
    }

    // save the new request for cancellation
    tokenSource = axios.CancelToken.source();

    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=b79310e5c25643e20c05b842caaaee33&language=fr-FR&page=1`, {
      cancelToken: tokenSource.token,
    });

    return { result: data.results };
  }
  catch (err) {
    if (axios.isCancel(err)) return { cancelPrevQuery: true };
    return [err];
  }
};
