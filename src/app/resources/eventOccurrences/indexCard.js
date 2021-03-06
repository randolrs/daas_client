import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const EventOccurrenceIndexCard = ({ eventOccurrence }) => {
  if(!eventOccurrence) return null;

  return (
    <CardContainer key={ `event-occurrence-index-card-${ eventOccurrence.id }` }>
      <Card>
        <CardContent>
          <span>{ eventOccurrence.event.name  }</span>
          <span>{ eventOccurrence.description || eventOccurrence.event.description }</span>
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default EventOccurrenceIndexCard;

const CardContainer = styled.div`
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const CardContent = styled.div`
  padding: 50px 25px;
`;

