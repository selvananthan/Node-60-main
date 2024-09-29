const mongoose = require('mongoose');


// const dburl = process.env.NODE_ENV_DB_URL;
const dburl ='mongodb+srv://selvagoogly:%3CMars%401992%3E@cluster0.k3rqn.mongodb.net/SiddHotelBooking?retryWrites=true&w=majority&appName=Cluster0';
const connectDb = async () => {

    if (mongoose.connection.readyState === 1) {
        console.log(' MongoDb instance already connected ');
        return
    }

    await mongoose.connect(dburl);
    console.log(mongoose.connection.readyState, ' Connection State');
}



module.exports = {
    connectDb,
    mongoose
}

