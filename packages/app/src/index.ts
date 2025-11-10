// changing this import to a relative path also fixes the tada warnings
import { graphql } from './tada.ts';

const userFragment = graphql(`
  fragment UserFragment on User {
    id
    name
    email
  }
`);

// Simple hello query
const RemoveUserMutation = graphql(`
  mutation RemoveUser {
    removeUser {
      ...UserFragment
    }
  }
`, [userFragment]);

// NOTE: this mutation will fail at run time because the fragment is not provided as a dep, but tada doesn't warn about it 
// even during generate, turbo and check seemingly because it's added as a dep to one of the mutations in this file
const AddUserMutation = graphql(`
  mutation AddUser {
    addUser {
      ...UserFragment
    }
  }
`);
// Example usage (this won't actually execute, just for type checking)
const exampleUsage = async () => {
  return { RemoveUserMutation, AddUserMutation };
};

export { RemoveUserMutation, AddUserMutation, exampleUsage }; 