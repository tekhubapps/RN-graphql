'use strict';

import gql from 'graphql-tag';

/**
 * Query which is used to fetch the list of books from graphql
 */
export const AllBooksQuery = gql`
{
  books {
    id
    name
    genre
    author {
      id
      name
      age
      books {
        id
        name
        genre
      }
    }
  }
}
`;

export const AllAuthorsQuery = gql`
{
  authors {
    id
    name
    age
    books {
      id
      name
      genre
    }
  }
}
`;