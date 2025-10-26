const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://namanchachan_db_user:4zpenS05VqCfrN1E@ac-4j9pcuw-shard-00-00.xaku3ud.mongodb.net:27017,ac-4j9pcuw-shard-00-01.xaku3ud.mongodb.net:27017,ac-4j9pcuw-shard-00-02.xaku3ud.mongodb.net:27017/?replicaSet=atlas-z5svkd-shard-0&ssl=true&authSource=admin`, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;

