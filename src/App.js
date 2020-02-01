import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Layout from 'app/Layout';
import { updateIsLoggedIn } from 'redux/action';

const App = ({ updateIsLoggedIn }) => {

  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const update = async () => {
      await updateIsLoggedIn();
      setIsLoading(false);
    }

    update();
  }, []);

  return (
    <>
      {
        isLoading ?
          <span>Loading...</span>
          : <Layout/>
      }
    </>
  );
}

export default connect(null, {
  updateIsLoggedIn,
})(App);
