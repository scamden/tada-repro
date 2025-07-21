// changing this import to a relative path also fixes the tada warnings
import { graphql } from '#tada.ts';

// Simple hello query
const HelloQuery = graphql(`
  query Hello($name: String) {
    hello(name: $name)
  }
`);

// User query with fragment
const UserQuery = graphql(`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`);

// Example usage (this won't actually execute, just for type checking)
const exampleUsage = async () => {
  return { HelloQuery, UserQuery };
};

export { HelloQuery, UserQuery, exampleUsage }; 