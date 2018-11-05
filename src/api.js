import axios from 'axios';

const baseUrl = 'https://nc-news-andy.herokuapp.com/api/';

export const fetchArticles = () => {
	return axios.get(`${baseUrl}articles`).then(({ data }) => {
		return data;
	});
};

export const fetchTopics = () => {
	return axios.get(`${baseUrl}topics`).then(({ data }) => {
		return data.topics;
	});
};

export const fetchArticlesByTopic = (topicslug) => {
	return axios.get(`${baseUrl}topics/${topicslug}/articles`).then(({ data }) => {
		return data;
	});
};
