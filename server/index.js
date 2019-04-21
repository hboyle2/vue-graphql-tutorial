const { GraphQLServer } = require("graphql-yoga");
const WizardList = require("./WizardList");

let list = WizardList.WizardList;

const typeDefs = `
type Query {
  Wizards: [Characters!]
}

type Characters {
  id: Int
  name: String
  image: String
  wand: Wand
  house: String
}

type Wand {
  core: String
  length: Int
  wood: String
}
`;

const resolvers = {
  Query: {
    Wizards: () => {
      return list;
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
