import React, { useEffect } from 'react';
import styled from 'styled-components';
import PostThumb from './PostThumb';
import { connect } from 'react-redux';
import { getPostsList } from '../store/posts/actions';

const PostsList = props => {
  useEffect(() => {
    props.getAllPosts();
  }, []);

  return (
    <PostsContainer>
      {props.posts.map((post, index) => {
        return <PostThumb key={index + post.id} id={post.id} title={post.title} body={post.body} />;
      })}
    </PostsContainer>
  );
};

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 30px 0;
`;

const mapStateToProps = state => {
  return {
    error: state.posts.error,
    posts: state.posts.posts,
    isPostsFetching: state.posts.isPostsFetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllPosts: () => dispatch(getPostsList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
