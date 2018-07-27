const mongoose = require('mongoose');

// Map global promises
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://chris:Password123@ds261040.mlab.com:61040/pusherpoll')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))