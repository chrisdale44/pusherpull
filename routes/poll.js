const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
const mongoose = require('mongoose');
const Vote = require('../models/Vote')

var pusher = new Pusher({
    appId: '568194',
    key: '75d7162a2785c8ce6234',
    secret: 'd83cac71aba180aa13de',
    cluster: 'eu',
    encrypted: true
  });

router.get('/', (req, res) => {
    Vote.find().then(votes => res.json({success: true, votes: votes}));
});

router.post('/', (req, res) => {
    const newVote = {
        os: req.body.os,
        points: 1
    }

    new Vote(newVote).save().then(vote => {
        pusher.trigger('os-poll', 'os-vote', {
            points: parseInt(vote.points),
            os: vote.os
        });
    })

    

    return res.json({success: true, message: "Thank you for voting"});
})

module.exports = router;