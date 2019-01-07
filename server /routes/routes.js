const express = require('express');
const controller = require('../controllers/index');

const router = express.Router();

//Admin can create meetups and request to see all meetups. 
router.route('/api/v1/meetups')
  .post(controller.meetupCreate)
  .get(controller.getAllMeetups);

//filtering out upcoming meetups. 
router.route('/api/v1/meetups/upcoming/')
  .get(controller.getUpcomingMeetups);

//getting one meetup per id. 
router.route('/api/v1/meetups/:id')
  .get(controller.getMeetupById);

//Asking a question 
router.route('/api/v1/questions')
  .post(controller.createQuestion);

//upvote a question 
router.route('/api/v1/questions/:id/upvote')
  .patch(controller.upVote);

//downvote a question
router.route('/api/v1/questions/:id/downvote')
  .patch(controller.downVote);

//
router.route('/api/v1/meetups/:id/rsvps')
  .post(controller.rsvps);

module.exports = router;