const hello = require('./query/hello');

const resolvers = {
  Query: {
    hello,
  },
};

module.exports = resolvers;