import http from '../lib/api';

// // get article
const getArticle = async (articleId) => {
    await http.get(`/api/articles/${articleId}`).then(r => {
        return r.data.data
    });
};

export default getArticle;