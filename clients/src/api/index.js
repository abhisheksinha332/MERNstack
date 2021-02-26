import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

// const url = 'http://localhost:5000/posts';
// //'https://post-feeds.herokuapp.com/posts';

 export const fetchPosts = () => API.get('/posts');

 export const createPost = (newPost) => API.post('/posts',newPost);

 export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`,updatedPost);

 export const deletePost = (id) => API.delete(`/posts/${id}`);

 export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

 export const signIn = (submit) => API.post('/user/signin',submit);

 export const signUp = (submit) => API.post('/user/signup',submit);

   