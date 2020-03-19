export const GET_POSTS = 'GET_POSTS';
export const POSTS_RECEIVED = 'POSTS_RECEIVED';
export const POSTS_ERRORED = 'POSTS_ERRORED';

export const GET_POST = 'GET_POST';
export const POST_RECEIVED = 'POST_RECEIVED';
export const POST_ERRORED = 'POST_ERRORED';

export const CREATE_POST = 'CREATE_POST';
export const CREATE_POST_SUCCEEDED = 'CREATE_POST_SUCCEEDED';
export const CREATE_POST_ERRORED = 'CREATE_POST_ERRORED';

export interface PostsState {
  readonly posts: Post[];
  readonly isPostsFetching: boolean;
  readonly error: boolean;
  readonly post: Post | {};
}

export interface Post {
  title: string;
  body: string;
  id: number;
}

interface GetPostsAction {
  type: typeof GET_POSTS;
}
interface PostsReceivedAction {
  type: typeof POSTS_RECEIVED;
  payload: Post[];
}
interface PostsErroredAction {
  type: typeof POSTS_ERRORED;
}

interface GetPostAction {
  type: typeof GET_POST;
}
interface PostReceivedAction {
  type: typeof POST_RECEIVED;
  payload: Post;
}
interface PostErroredAction {
  type: typeof POST_ERRORED;
}

interface CreatePostAction {
  type: typeof CREATE_POST;
}
interface CreatePostSucceeded {
  type: typeof CREATE_POST_SUCCEEDED;
}
interface CreatePostErrored {
  type: typeof CREATE_POST_ERRORED;
}

export type PostsActionsType =
  | GetPostsAction
  | PostsReceivedAction
  | PostsErroredAction
  | GetPostAction
  | PostReceivedAction
  | PostErroredAction
  | CreatePostAction
  | CreatePostSucceeded
  | CreatePostErrored;
