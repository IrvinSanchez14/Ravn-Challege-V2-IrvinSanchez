import {gql} from '@apollo/client';

export const GET_PEOPLE = gql`
  query getAllPeople($time: String) {
    allPeople(first: 5, after: $time) {
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

  export const GET_DESCRIPTION_CHARACTER = gql`
    query getDescription($id: ID){
      person(id: $id) {
        eyeColor
        hairColor
        skinColor
        birthYear
        vehicleConnection {
          vehicles {
            name
          }
        }
      }
    }
`;