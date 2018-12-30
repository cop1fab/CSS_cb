import {
  Router
} from 'express';
import users from '../models';
import meetups from '../models ';
import rsvp from '../models ';
import questions from '../models ';

const routers = Router();

routers.use(users, meetups, rsvp, questions);


export default routers;