import { Router } from 'express';
import passport from 'passport';
import * as controller from '../controllers/plannerController.js';

const router = Router();

router.get('/auth/google',
  passport.authenticate('google', {
    scope: [
      'profile',
      'email',
      'https://www.googleapis.com/auth/calendar'
    ]
  })
);

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => res.redirect('/planner')
);

const isAuth = (req, res, next) => {
  if (!req.user) return res.redirect('/planner/auth/google');
  next();
};

// ver tus eventos
router.get('/', isAuth, controller.render);

// crear un evento
router.post('/create', isAuth, controller.create);

//  Eliminar evento nuevo
router.post('/delete/:id', isAuth, controller.remove);

export default router;