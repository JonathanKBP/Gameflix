import React from 'react';
import Page404 from '../../assets/img/Page404.png';
import PageDefault from '../../components/PageDefault';
import './index.css';

function Error404() {
  return (
    <>
      <PageDefault>
        
        <img className="Page404" src={Page404} alt="Error: 404" />

      </PageDefault>
    </>
  );
}

export default Error404;