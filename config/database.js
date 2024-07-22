const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_LINK);

const db = mongoose.connection;

db.on(`connected to MongoDB ${mongoose.connection.name}`);

