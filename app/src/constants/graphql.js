import gql from "graphql-tag";

export const WIZARD_QUERY = gql`
  {
    Wizards {
      name
      house
      image
    }
  }
`;

export const CREATE_WIZARD = gql`
  mutation createWizardMutation($name: String, $image: String, $house: String) {
    createWizard(name: $name, image: $image, house: $house) {
      name
      image
      house
    }
  }
`;
