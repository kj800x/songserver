import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

import GraphQLJSON from "graphql-type-json";
import GraphQLDate from "./customScalars/Date";
import GraphQLBlob from "./customScalars/Blob";
import { typeDefs } from "./typeDefs";
import { Tag } from "./resolvers/Tag";
import { Query } from "./resolvers/Query";
import { Mutation } from "./resolvers/Mutation";
import { buildDataLoaders } from "./dataLoaders";

const resolvers = {
  JSON: GraphQLJSON,
  Date: GraphQLDate,
  Blob: GraphQLBlob,

  Song: Song.resolver,
  Tag: Tag.resolver,

  Query: Query.resolver,
  Mutation: Mutation.resolver,
};

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    dataLoaders: buildDataLoaders(),
  }),
  uploads: false,
  playground: {
    endpoint: "/songs/graphql",
    settings: {
      "editor.theme": "dark",
    },
  },
});

export const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
