import {
  Post,
  PostsActionsType,
  CREATE_POST_ERRORED,
  CREATE_POST_SUCCEEDED,
  GET_POST,
  CREATE_POST,
  GET_POSTS,
  POST_RECEIVED,
  POST_ERRORED,
  POSTS_RECEIVED,
  POSTS_ERRORED,
} from './types';

import { ActionCreator, Dispatch } from 'redux';
import axios from 'axios';

const getPosts: ActionCreator<PostsActionsType> = () => {
  return {
    type: GET_POSTS,
  };
};

const getPost: ActionCreator<PostsActionsType> = () => {
  return {
    type: GET_POST,
  };
};

const postSucceeded: ActionCreator<PostsActionsType> = post => {
  return {
    type: POST_RECEIVED,
    payload: post,
  };
};

const postErrored: ActionCreator<PostsActionsType> = () => {
  return {
    type: POST_ERRORED,
  };
};

const postsSucceeded: ActionCreator<PostsActionsType> = (posts: Post[]) => {
  return {
    type: POSTS_RECEIVED,
    payload: posts,
  };
};

const postsErrored: ActionCreator<PostsActionsType> = () => {
  return {
    type: POSTS_ERRORED,
  };
};

const sendPost: ActionCreator<PostsActionsType> = () => {
  return {
    type: CREATE_POST,
  };
};

const postCreated: ActionCreator<PostsActionsType> = () => {
  return {
    type: CREATE_POST_SUCCEEDED,
  };
};

const postCreateErrored: ActionCreator<PostsActionsType> = () => {
  return {
    type: CREATE_POST_ERRORED,
  };
};

export const getPostsList = () => (dispatch: Dispatch<PostsActionsType>) => {
  dispatch(getPosts());
  axios.get('https://simple-blog-api.crew.red/posts').then(response => {
    if (response.status === 200) {
      dispatch(postsSucceeded(response.data));
    } else {
      dispatch(postsErrored());
    }
  });
};

export const getSinglePost = id => (dispatch: Dispatch<PostsActionsType>) => {
  dispatch(getPost());
  axios.get(`https://simple-blog-api.crew.red/posts/${id}`).then(response => {
    if (response.status === 200) {
      dispatch(postSucceeded(response.data));
    } else {
      dispatch(postErrored());
    }
  });
};

export const createPost = formData => (dispatch: Dispatch<PostsActionsType>) => {
  dispatch(sendPost());
  axios
    .post(
      'https://simple-blog-api.crew.red/posts',
      {
        title: formData.title,
        body: formData.body,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(response => {
      if (response.status === 200) {
        dispatch(postCreated());
      } else {
        dispatch(postCreateErrored());
      }
    });
};
