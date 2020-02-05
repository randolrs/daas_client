import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const DEFAULT_CONTENT_WIDTH = 500;

const WithFloatingForm = (WrappedForm, width) => {
  return (() => {
    return (
      <FloatingFormContainer>
        <FloatingFormContent width={ width }>
          <Card>
            <CardContent>
              <WrappedForm />
            </CardContent>
          </Card>
        </FloatingFormContent>
      </FloatingFormContainer>
    )
  });
};

export default WithFloatingForm;

const FloatingFormContainer = styled.div`
  position: relative;
`;

const FloatingFormContent = styled.div`
  margin: 0 auto;
  max-width: ${ props => props.width || DEFAULT_CONTENT_WIDTH }px;
`;

const CardContent = styled.div`
  padding: 50px 25px;
`;
