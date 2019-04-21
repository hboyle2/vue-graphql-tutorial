const { GraphQLServer } = require("graphql-yoga");
const WizardList = require("./WizardList");

let list = WizardList.WizardList;

const typeDefs = `
type Query {
  Wizards: [Characters!]
}

 type Mutation {
    createWizard(name: String, house: String, image: String ): Characters!
    
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
let idCount = list.length;

const resolvers = {
  Query: {
    Wizards: () => {
      return list;
    }
  },
  Mutation: {
    createWizard: (parent, args) => {
      const link = {
        id: ++idCount,
        name: args.name,
        image: args.image
      };
      list.push(link);
      return link;
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
