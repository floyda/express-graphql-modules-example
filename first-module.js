var { createModule, gql } = require('graphql-modules');

exports.myModule = createModule({
  id: 'my-module',
  dirname: __dirname,
  typeDefs: [
    gql`
        type Query {
            hello: String!
        }
    `,
  ],
  resolvers: {
    Query: {
      hello: () => 'world',
    },
  },
});
