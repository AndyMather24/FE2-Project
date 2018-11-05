import axios from 'axios';

const baseUrl = 'https://nc-news-andy.herokuapp.com/api/';

export const fetchArticles = () => {
	return axios.get(`${baseUrl}articles`).then(({ data }) => {
		return data;
	});
};
