# TODO:

- Fill this up with instructions on how to copy over the components from each package.
- Create READMEs on each subfolder explaining package specific things (for example for shadcn, to install shadcn, etc.).

# DONE:
- Re-organize sw architecture on each so that all Puck related configs/components are under folder `./puck` on each app and people can easily copy them over:

`./app/nextjs-editor-route` -> `./puck/index.ts` -> `./puck/config/...` -> `./puck/components/...`; `./puck/constants/...`; etc.

- Reorganize twblocks to follow above architecture
- Fix react-email package with things from twitter-demo to work well with AI.
