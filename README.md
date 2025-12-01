## What is this?

This repository serves as a reference for integrating Puck and Puck AI with component libraries.

You can use it to:

- Get ready-to-use Puck component configs for your project
- Understand how to integrate your own components
- Bootstrap a new project from scratch

We currently have references for the following component libraries:

- [shadcn](https://github.com/FedericoBonel/puck-configs/tree/main/shadcn-twblocks)
- [React Email](https://github.com/FedericoBonel/puck-configs/tree/main/react-email)

## Quick Start

1. Install the component library you want in your project.

2. Clone the repository:

    ```sh
    git clone {link}
    ```

3. Copy or move any folders/files you need into your project.

### Folder Structure

Each component library has its own subfolder. Inside, you'll find a basic app bootstrapped with our [Next.js recipe](https://github.com/puckeditor/puck/tree/main/recipes/next).

All Puck-related code lives under the `./puck` directory.

#### Puck Configs

- Main Puck config: `./puck/index.tsx`
- Component configs: `./puck/config/components`
- Root config: `./puck/config/root/index.tsx`
- Reusable field configs: `./puck/config/fields`

#### Utilities

- Shared components (e.g., heading, link, button): `./puck/components`
- Shared constants (e.g., theme palette, numbers): `./puck/constants`
- Shared helpers (e.g., `getItemSummary`, `add`): `./puck/lib`

For detailed steps on how to reuse the Puck config, component configs, or other parts of the codebase, check out the subfolders for each component library:

- [shadcn](https://github.com/FedericoBonel/puck-configs/tree/main/shadcn-twblocks)
- [React Email](https://github.com/FedericoBonel/puck-configs/tree/main/react-email)
