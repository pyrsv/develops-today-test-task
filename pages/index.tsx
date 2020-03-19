import React, { Fragment } from 'react';
import { NextPage } from 'next';
import Header from '../components/Header';
// import PostContainer from '../components/PostContainer';
import PostsList from '../components/PostList';
import LayoutContainer from '../components/LayoutContainer';
// import CreatePost from '../components/CreatePost';

const Index: NextPage<any> = () => {
  return (
    <Fragment>
      <Header />
      <section>
        <LayoutContainer>
          <PostsList />
        </LayoutContainer>
      </section>
    </Fragment>
  );
};

export default Index;
