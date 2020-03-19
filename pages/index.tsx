import React, { Fragment } from 'react';
import Header from '../components/Header';
// import Post from '../components/Post';
// import PostsList from '../components/PostList';
import LayoutContainer from '../components/LayoutContainer';
import CreatePost from '../components/CreatePost';

const Index: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <section>
        <LayoutContainer>
          <CreatePost />
        </LayoutContainer>
      </section>
    </Fragment>
  );
};

export default Index;
