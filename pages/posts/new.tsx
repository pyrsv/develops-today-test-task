import React, { Fragment } from 'react';
import { NextPage } from 'next';
import Header from '../../components/Header';
import CreatePost from '../../components/CreateForm';
import LayoutContainer from '../../components/LayoutContainer';

const New: NextPage<any> = () => {
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

export default New;
