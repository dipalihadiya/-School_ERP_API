const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dipalihadiya0206:QbbZ4It8dVQKCyen@cluster0.ao9tb.mongodb.net/schoolapi')
    .then(() => console.log('Connected!')).catch((err) => {
        console.log("err", err);
    })
module.exports = mongoose
