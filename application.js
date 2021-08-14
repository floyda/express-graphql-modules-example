var { createApplication } = require('graphql-modules');
var { myModule } = require('./first-module');

// This is your application, it contains your GraphQL schema and the implementation of it.
const application = createApplication({
  modules: [myModule],
});

exports.application = application;
// This is your actual GraphQL schema
// const schema = application.schema;