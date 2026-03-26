import * as googleService from '../services/googleService.js';

export const render = async (req, res) => {
  if (!req.user) return res.redirect('/');

  const events = await googleService.getEvents(req.user.accessToken);

  res.render('planner', { events });
};

export const create = async (req, res) => {
  try {
    const { title, start, end } = req.body;

    const event = {
      summary: title,
      start: {
        dateTime: new Date(start).toISOString(),
        timeZone: 'America/Mexico_City'
      },
      end: {
        dateTime: new Date(end).toISOString(),
        timeZone: 'America/Mexico_City'
      }
    };

    await googleService.createEvent(req.user.accessToken, event);

    res.redirect('/planner');

  } catch (error) {
    console.error("ERROR:", error.response?.data || error.message);
    res.send("Error al crear evento");
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.user) return res.redirect('/');

    await googleService.deleteEvent(req.user.accessToken, id);

    res.redirect('/planner');

  } catch (error) {
    console.error("ERROR DELETE:", error.response?.data || error.message);
    res.send("Error al eliminar evento");
  }
};