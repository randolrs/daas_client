import apiClient from './config';

const EVENT_TAGS = '/event_tags';

export const fetchEventTags = async (params) => {
  try {
    const response = await apiClient.fetch(EVENT_TAGS, params);

    return response;
  } catch (err) {
    console.log({err});
  }
};

