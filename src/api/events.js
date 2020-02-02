import apiClient from './config';

const EVENTS = '/events';

export const createEvent = async (params) => {
  try {
    const response = await apiClient.post(EVENTS, params);

    return response;
  } catch (err) {
    console.log({err});
  }
};

