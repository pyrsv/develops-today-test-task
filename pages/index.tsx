import React, { Fragment } from 'react';
import { NextPage } from 'next';
import Header from '../components/Header';
import PostsList from '../components/PostList';
import LayoutContainer from '../components/LayoutContainer';

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
