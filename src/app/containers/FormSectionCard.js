import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const FormSectionCard = (WrappedForm) => {
  return (() => {
    return (
      <Card>
        <CardContent>
          <WrappedForm />
        </CardContent>
      </Card>
    )
  });
};

export default FormSectionCard;

const CardContent = styled.div`
  padding: 15px;
`;
