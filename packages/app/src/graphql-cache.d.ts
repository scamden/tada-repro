/* eslint-disable */
/* prettier-ignore */
import type { TadaDocumentNode, $tada } from 'gql.tada';

declare module 'gql.tada' {
 interface setupCache {
    "\n  fragment UserFragment on User {\n    id\n    name\n    email\n  }\n":
      TadaDocumentNode<{ id: string; name: string; email: string; }, {}, { fragment: "UserFragment"; on: "User"; masked: true; }>;
    "\n  mutation RemoveUser {\n    removeUser {\n      ...UserFragment\n    }\n  }\n":
      TadaDocumentNode<{ removeUser: { [$tada.fragmentRefs]: { UserFragment: "User"; }; }; }, {}, void>;
    "\n  mutation AddUser {\n    addUser {\n      ...UserFragment\n    }\n  }\n":
      TadaDocumentNode<{ addUser: {}; }, {}, void>;
  }
}
