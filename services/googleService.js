import axios from 'axios';

export const getEvents = async (accessToken) => {
  const res = await axios.get(
    'https://www.googleapis.com/calendar/v3/calendars/primary/events',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );

  return res.data.items;
};

export const createEvent = async (accessToken, event) => {
  await axios.post(
    'https://www.googleapis.com/calendar/v3/calendars/primary/events',
    event,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
};

export const deleteEvent = async (accessToken, eventId) => {
  await axios.delete(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events/${eventId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
};