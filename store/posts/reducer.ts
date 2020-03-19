import {
  GET_POSTS,
  POSTS_ERRORED,
  POSTS_RECEIVED,
  GET_POST,
  POST_RECEIVED,
  POST_ERRORED,
  CREATE_POST,
  CREATE_POST_SUCCEEDED,
  CREATE_POST_ERRORED,
  PostsActionsType,
  PostsState,
} from './types';

import { combineReducers } from 'redux';

const initialState: PostsState = {
  isPostsFetching: false,
  posts: [],
  post: {},
  error: false,
};

const postsReducer = (state = initialState, action: PostsActionsType): PostsState => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        error: false,
        isPostsFetching: true,
      };
    case POSTS_RECEIVED:
      return {
        ...state,
        isPostsFetching: false,
        posts: action.payload,
        post: {},
      };
    case POSTS_ERRORED:
      return {
        ...state,
        isPostsFetching: false,
        error: false,
      };
    case GET_POST:
      return {
        ...state,
        isPostsFetching: true,
        error: false,
      };
    case POST_RECEIVED:
      return {
        ...state,
        isPostsFetching: false,
        post: action.payload,
      };
    case POST_ERRORED:
      return {
        ...state,
        isPostsFetching: false,
        error: true,
      };
    case CREATE_POST:
      return {
        ...state,
        isPostsFetching: true,
        error: false,
      };
    case CREATE_POST_SUCCEEDED:
      return {
        ...state,
        isPostsFetching: false,
      };
    case CREATE_POST_ERRORED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ posts: postsReducer });
