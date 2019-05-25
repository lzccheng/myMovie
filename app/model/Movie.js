module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const MovieSchema = new Schema({
    info: {
      title: String,
      ftpUrl: String,
      poster: String,
      fullTitle: String,
      fullName: String,
      year: String,
      where: String,
      sort: String,
      language: String,
      textMode: String,
      date: String,
      long: String,
      director: String,
      imgs: Array,
      introduction: Array,
    },
    source: String,
    pageUrl: String,
  });
  return mongoose.model('movies', MovieSchema);
}