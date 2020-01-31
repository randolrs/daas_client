import React from 'react';
import FullScreenPrompt from '../containers/FullScreenPrompt';
import styled from 'styled-components';

const NewAccountPrompt = () => {
  return (
    <React.Fragment>
      <FullScreenHeader>Something exciting is coming!</FullScreenHeader>
      <FullScreenCta>
        <span onClick={ goToLogin }>I am the owner</span>
      </FullScreenCta>
    </React.Fragment>
  )
};

export default FullScreenPrompt(NewAccountPrompt);

const goToLogin = async () => {
  window.location = '/login';
};

const FullScreenHeader = styled.div`
  font-size: 60px;
`;

const FullScreenCta = styled.div`
  margin-top: 30px;
`;

