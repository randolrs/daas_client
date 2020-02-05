import apiClient from './config';

const EVENT_OCCURRENCES = '/event_occurrences';

export const fetchEventOccurrences = async (params) => {
  try {
    const response = await apiClient.fetchAll(EVENT_OCCURRENCES, params);

    return response;
  } catch (err) {
    console.log({err});
  }
};

