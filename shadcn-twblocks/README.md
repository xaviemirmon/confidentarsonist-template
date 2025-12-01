# `shadcn` Integration Reference

This application showcases how to integrate `shadcn` with Puck and Puck AI to build a page builder. It was bootstrapped with our [Next.js recipe](https://github.com/puckeditor/puck/tree/main/recipes/next), and all Puck-related code lives under the `./puck` directory.

You can use it to:

- Get ready-to-use `shadcn` Puck component configs for your project
- Understand how to integrate your own components
- Bootstrap a new project from scratch

## Quick Start

### Using the `shadcn` Puck Component Configs

You're free to copy any components you need into your project however you like. Just make sure to bring in any required dependencies and update import paths based on where you paste the files.

Below are the steps for doing this while preserving the `./puck/` folder structure.

1. Clone this repository:
   ```sh
   git clone {link to repo}
   ```

2. [Install shadcn](https://ui.shadcn.com/docs/installation) in your project.

3. Set up a `@/puck` import alias in your `tsconfig.json`:  
   (You may need additional steps depending on your bundler)
   ```json
   {
     "compilerOptions": {
       "plugins": [{ "name": "next" }],
       "baseUrl": ".",
       "paths": {
         "@/puck": ["./puck"]
       }
     }
   }
   ```

4. Copy shared components, context, and utilities into your project:
   - `puck-configs/shadcn-twblocks/puck/components` → `your-project/puck/components`
   - `puck-configs/shadcn-twblocks/puck/context` → `your-project/puck/context`
   - `puck-configs/shadcn-twblocks/puck/lib` → `your-project/puck/lib`

5. Copy the `shadcn` components:
   - `puck-configs/shadcn-twblocks/components/ui` → `your-project/components/ui`

6. Copy any Puck component config you want to use:
   - Example: copying the Header component  
     `puck-configs/shadcn-twblocks/puck/config/components/header` → `your-project/puck/config/components/header`

7. Use it in your Puck config:
   ```tsx
   import { Puck } from "@measured/puck";
   import Header from "@/puck/config/components/header";

   const config = {
     components: {
       Header,
     },
   };

   const Editor = () => {
     return <Puck data={{}} config={config} />;
   };
   ```

### Bootstrapping a New Project with shadcn

1. Clone this repository:
   ```sh
   git clone {link to repo}
   ```

2. [Install pnpm](https://pnpm.io/installation#using-npm)

3. Create a folder for your project.

4. Copy over all files from `puck-configs/shadcn-twblocks` into your project folder.

5. Update `package.json` with your own information:
   ```json
   {
     "name": "puck-configs", // Replace with your project name
     "version": "1.0.0" // Replace with your project version
     // ...rest of the package.json
   }
   ```

6. Install the project:
   ```sh
   pnpm install
   ```

7. Run it:
   ```sh
   pnpm dev
   ```
