# GraphQL Tada Bug Reproduction

This is a minimal pnpm monorepo setup to reproduce a bug involving TypeScript and GraphQL Tada.

## Structure

```
tada-repro/
├── packages/
│   ├── app/          # App workspace with gql.tada integration
│   │   ├── tsconfig.json (extends rig config + gql.tada plugin)
│   │   ├── schema.graphql
│   │   └── src/index.ts (uses tada queries)
│   └── rig/          # Base workspace with shared tsconfig
│       └── tsconfig.json (base configuration)
```

## Setup

The monorepo is already configured. To install dependencies:

```bash
pnpm install
```

## TypeScript Compilation

To check TypeScript compilation in all workspaces:

```bash
pnpm build
```

To watch for changes in the app workspace:

```bash
cd packages/app && pnpm dev
```

To see warnings when generating tada cache

```bash
cd packages/app && pnpm run tada-gen
```

## What's Included

- **rig**: Base TypeScript configuration
- **app**: Extends rig config with gql.tada plugin configured
- Simple GraphQL schema with User and Query types
- Source file using typed GraphQL queries via gql.tada

The gql.tada plugin is configured in `packages/app/tsconfig.json` to use the schema and generate types. 