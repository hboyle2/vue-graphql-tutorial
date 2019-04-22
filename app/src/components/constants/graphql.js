import gql from "graphql-tag";

export const WIZARD_QUERY = gql`
  {
    Wizards {
      image
      house
      name
    }
  }
`;
export const CREATE_WIZARD = gql`
  mutation createWizard($name: String, $image: String, $house: String) {
    createWizard(name: $name, image: $image, house: $house) {
      name
      image
      house
    }
  }
`;
