import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import PageContent from 'app/containers/PageContent';

import { fetchEventTags } from 'api/event_tags';
// import EventOccurrenceIndexCard from 'app/resources/eventOccurrences/indexCard';

// TODO: Need to abstract this high-level component

const EventTags = ({ history }) => {
  const [ eventTags, setEventTags ] = useState([]);

  useEffect(() => {
    getEventTags();
  }, []);

  const getEventTags = async () => {
    const list = await fetchEventTags();

    setEventTags(list);
  }

  return (
    <React.Fragment>
      <div>+ Create Event Tags</div>
      {
        eventTags.length ?
          eventTags.map(eventTag => <span key={ `event-tag-${ eventTag.id }` }>{ eventTag.name }</span>)
        : null
      }
    </React.Fragment>
  )
};

export default PageContent(withRouter(EventTags));
