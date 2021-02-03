import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar JSON
  scalar Date
  scalar Blob

  type Song {
    id: Int!
    name: String!
    album: String!
    artist: String!
    arrangement: String! ${/* CHORDS || TAB || SHEET_MUSIC */ ""}

    contentFormat: String! ${/* TEXT_CONTENT || MUSICXML */ ""}
    content: String

    tags: [Tag!]!
  }

  type Tag {
    id: Int!
    value: String!
    description: String
    songs: [Song!]!
  }

  type SearchResultPage {
    songs: [Song!]!
    total: Int!
  }

  type Query {
    allSongs: [Song!]!
    allTags: [Tag!]!
    search(query: String!, limit: Int = 30, offset: Int = 0): SearchResultPage!
  }

  type Mutation {

  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
