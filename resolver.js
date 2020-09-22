const Movie = require("./models/Movie");

exports.resolvers = {
  Query: {
    getAllMovies: async () => await Movie.find({}).exec()
  },
  Mutation: {
    addMovie: async (_, args) => {
        try {
            let response = await Movie.create(args);
            return response;
        } catch(e) {
            return e.message;
        }
    }
  }
};
