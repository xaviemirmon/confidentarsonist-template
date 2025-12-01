# React Email Integration Reference

This application showcases how to integrate React Email with Puck and Puck AI to build an email builder. It was bootstrapped with our [Next.js recipe](https://github.com/puckeditor/puck/tree/main/recipes/next) and all Puck component integration-related code lives under the `./puck` directory.

You can use it to:

- Get ready-to-use React Email Puck component configs for your project
- Understand how to integrate your own components
- Bootstrap a new project from scratch

## Quick Start

### Using the React Email Puck Component Configs

You're free to copy any components you need into your project however you like. Just make sure to bring in any required dependencies and update import paths based on where you paste the files.

Below are the steps for doing this while preserving the `./puck/` folder structure.

1. Clone this repository:
   
   ```sh
   git clone {link to repo}
   ```

2. Install React Email in your project:
   ```sh
   npm install @react-email/components
   ```

3. Set up a `@/puck` import alias in your `tsconfig.json`:  
   (You may need additional steps depending on your bundler)
   ```json
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/puck*": ["./puck*"]
       }
     }
   }
   ```

4. Copy shared components, constants, field configs, and utilities into your project:
   - `puck-configs/react-email/puck/components` → `your-project/puck/components`
   - `puck-configs/react-email/puck/constants` → `your-project/puck/constants`
   - `puck-configs/react-email/puck/lib` → `your-project/puck/lib`
   - `puck-configs/react-email/puck/config/fields` → `your-project/puck/config/fields`

5. Copy any component you want to use:
   - Example: copying the Header component  
     `puck-configs/react-email/puck/config/components/Header` → `your-project/puck/config/components/Header`

6. Use it in your Puck config:
   ```tsx
   import { Puck } from "@measured/puck";
   import Header from "@/puck/config/components/Header";

   const config = {
     components: {
       Header,
     },
   };

   const Editor = () => {
     return <Puck data={{}} config={config} />;
   };
   ```

### Bootstrapping a New Project with React Email

1. Clone this repository:
   
   ```sh
   git clone {link to repo}
   ```

2. [Install pnpm](https://pnpm.io/installation#using-npm)

3. Create a folder for your project

4. Copy over all files from `puck-configs/react-email` into your project folder

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
