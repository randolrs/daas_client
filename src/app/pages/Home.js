import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchEventOccurrences } from 'api/event_occurrences';
import EventOccurrenceIndexCard from 'app/resources/eventOccurrences/indexCard';


const Home = ({ history }) => {

  const [ eventOccurrences, setEventOccurrences ] = useState([]);

  // history.push('/account-setup');
  useEffect(() => {
    getEventOccurrences();
  }, []);

  const getEventOccurrences = async () => {
    const { data } = await fetchEventOccurrences();

    setEventOccurrences(data);
  }

  return (
    <React.Fragment>
      <span>Home</span>
      {
        eventOccurrences ?
          eventOccurrences.map(eventOccurrence => <EventOccurrenceIndexCard eventOccurrence={ eventOccurrence } />)
        : null
      }
    </React.Fragment>
  )
};

const mapStateToProps = ({ isUserLoggedIn }) => {
  return {
    isUserLoggedIn,
  };
};

export default connect(mapStateToProps, {})(withRouter(Home));
