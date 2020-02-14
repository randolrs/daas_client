import React from 'react';
import styled from 'styled-components';

const DEFAULT_CONTENT_WIDTH = 1100;

const PageContent = (WrappedContent, width) => {
  return (() => {
    return (
      <PageContentContainer>
        <WrappedContent />
      </PageContentContainer>
    )
  });
};

export default PageContent;

const PageContentContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${ props => props.width || DEFAULT_CONTENT_WIDTH }px;
`;
