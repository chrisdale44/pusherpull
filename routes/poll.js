const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '568194',
    key: '75d7162a2785c8ce6234',
    secret: 'd83cac71aba180aa13de',
    cluster: 'eu',
    encrypted: true
  });

router.get('/', (req, res) => {
    res.send('POLL');
});

router.post('/', (req, res) => {
    pusher.trigger('os-poll', 'os-vote', {
        points: 1,
        os: req.body.os
    });

    return res.json({success: true, message: "Thank you for voting"});
})

module.exports = router;