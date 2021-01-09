import {gql} from '@apollo/client';

export const GET_PEOPLE = gql`
  query getAllPeople($test: String) {
    allPeople(first: 5, after: $test) {
      people {
        id
        name
        homeworld {
          name
        }
        species {
          name
        }
      }
      pageInfo {
        endCursor
      }
      totalCount
    }
  }`;