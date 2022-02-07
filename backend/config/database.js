const mongoose = require("mongoose");


// process.env.DB_URI resides in the config folder inside config.env
const connectDatabase = () => {
    mongoose
        .connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        })
        .then((data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        });
};

module.exports = connectDatabase;