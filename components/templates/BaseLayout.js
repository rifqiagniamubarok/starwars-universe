import React from 'react';
import Navbar from '../organisms/Navbar';
import classNames from 'classnames';

const BaseLayout = ({ children, top = true }) => {
  return (
    <div className="">
      <div className="min-h-screen">
        <div className="fixed w-screen top-0 z-50 ">
          <Navbar />
        </div>

        <main>
          <div className={classNames('md:container md:mx-auto', top && 'pt-24')}>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default BaseLayout;
