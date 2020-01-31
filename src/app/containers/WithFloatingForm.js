import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const WithFloatingForm = (WrappedForm) => {
  return (() => {
    return (
      <FloatingFormContainer>
        <FloatingFormContent>
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
  padding-top: 50px;
  position: relative;
`;

const FloatingFormContent = styled.div`
  margin: 0 auto;
  max-width: 500px;
`;

const CardContent = styled.div`
  padding: 50px 25px;
`;
