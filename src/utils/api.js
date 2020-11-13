import axios from '../config/axios';

async function fetchArticles(code = 'gb', category, term, pageSize = 30) {
  const res = await axios.get('/top-headlines', {
    params: {
      country: code,
      q: term,
      category,
      pageSize,
    },
  });
  return res.data;
}

export default {
  fetchArticles,
};
