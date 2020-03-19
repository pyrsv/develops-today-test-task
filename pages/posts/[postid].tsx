import { NextPage } from 'next';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import LayoutContainer from '../../components/LayoutContainer';
import Post from '../../components/Post';
import { getSinglePost } from '../../store/posts/actions';

const PostPage: NextPage<any> = ({ post, getPost,  }) => {
  const router = useRouter();
  const postId = router.query.postid;

  useEffect(() => {
    getPost(postId);
  }, []);


  return (
    <Fragment>
      <Header />
      <section>
        <LayoutContainer>
          <Post
            title={post.title}
            body={post.body}
          />
        </LayoutContainer>
      </section>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    post: state.posts.post,
    isPostsFetching: state.posts.isPostsFetching,
    error: state.posts.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPost: id => dispatch(getSinglePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
