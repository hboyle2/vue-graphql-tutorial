const { GraphQLServer } = require("graphql-yoga");
const WizardList = require("./WizardList");
const typeDefs = `
type Query {
  Wizards: String
}

`;
let list = WizardList.WizardList;
const resolvers = {
  Query: {
    Wizards: () => {
      return "list;";
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
