import 'dotenv/config';
import express from 'express';

import aiRoutes from './routes/aiRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import plannerRoutes from './routes/plannerRoutes.js';

import session from 'express-session';
import passport from 'passport';
import './config/passport.js';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'secreto',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/ai', aiRoutes);
app.use('/payment', paymentRoutes);
app.get('/payment', (req, res) => {
  const { success, cancel } = req.query;

  res.render('payment', {
    success,
    cancel
  });
});
app.use('/planner', plannerRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT || 40161, () => {
  console.log(`Servidor en http://localhost:${process.env.PORT}`);
});