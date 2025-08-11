
# Tailwind CSS v4 Integration with React and Vite

This project shows how to set up Tailwind CSS version 4 in a React app created with Vite, using the official `@tailwindcss/vite` plugin for smooth integration.

First, create a new React project using Vite by running:


npm create vite@latest tailwind-react-integration -- --template react
cd tailwind-react-integration
Then, install Tailwind CSS and the Vite plugin with:

npm install tailwindcss @tailwindcss/vite
Next, configure the Vite plugin by editing the vite.config.ts (or vite.config.js) file. Import React and the Tailwind plugin, then add them to the plugins array like this:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
Create or open your main CSS file, usually src/index.css, and add this line at the top to import Tailwind’s styles:

@import "tailwindcss";
Make sure to import this CSS file in your React entry point, like src/main.jsx or src/main.tsx:


import './index.css';
Create or update the tailwind.config.js file to specify which files Tailwind should scan for class names. It should look like this:


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
Start your development server with:


npm run dev
Now you can use Tailwind CSS utility classes in your React components. For example:


function App() {
  return (
    <div className="bg-blue-500 p-4 rounded text-white">
      Hello Tailwind CSS v4 + Vite!
    </div>
  );
}

export default App;
Note that with Tailwind CSS v4 and the @tailwindcss/vite plugin, you don’t need to install or configure PostCSS or Autoprefixer separately; the plugin manages that internally.

Make sure the content array in your tailwind.config.js includes all your source files where you use Tailwind classes so that unused CSS can be removed automatically.

Happy styling!
