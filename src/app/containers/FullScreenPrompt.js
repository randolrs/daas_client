import React from 'react';
import styled from 'styled-components';

const NewAccountPrompt = (WrappedContent) => {
  return (() => {
    return (
      <FullScreenContainer>
        <FullScreenContent>
          <WrappedContent />
        </FullScreenContent>
      </FullScreenContainer>
    )
  });
};

export default NewAccountPrompt;

const FullScreenContainer = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  width: 100%;
  color: #fff;
  height: 100%;
  display: table;
  background: #ED213A;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #93291E, #ED213A);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #93291E, #ED213A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const FullScreenContent = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`;
