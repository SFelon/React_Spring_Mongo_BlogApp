import axios from '../axios/axios';

const _addPost = (post) => ({
    type: 'ADD_POST',
    post
});

export const addPost = (postData = {
    postTitle: '',
    postContent: ''
}) => {
    return (dispatch) => {
        const post = {
            postTitle: postData.postTitle,
            postContent: postData.postContent,
        };

        return axios.post('posts', post).then(result => {
            dispatch(_addPost(result.data));
        });
    };
};

const _removePost = ({ id } = {}) => ({
    type: 'REMOVE_POST',
    id
});


export const removePost = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`posts/${id}`).then(() => {
            dispatch(_removePost({ id }));
        })
    }
};


const _editPost = (id, updates) => ({
    type: 'EDIT_POST',
    id,
    updates
});

export const editPost = (id, updates) => {
    return (dispatch) => {
        return axios.put(`posts/${id}`, updates).then(() => {
            dispatch(_editPost(id, updates));
        });
    };
};

const _getPosts = (posts) => ({
    type: 'GET_POSTs',
    posts
});

export const getPosts = () => {
    return (dispatch) => {
        return axios.get('posts').then(result => {
            const posts = [];

            result.data.forEach(item => {
                posts.push(item);
            });

            dispatch(_getPosts(posts));
        });
    };
};