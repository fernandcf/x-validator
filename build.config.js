import { build } from "vite";

// libraries
const libraries = [
  {
    entry: "./builds/cdn.js",
    name:'cdn',
    fileName: "cdn",
    formats: ["iife"],
  },
  {
    entry: "./builds/module.js",
    name: "plugin",
    fileName: "plugin",
  },
];

// build
libraries.forEach(async (libItem) => {
  await build({
    configFile: false,
    build: {
      lib: libItem,
      emptyOutDir: false,
      rollupOptions: {
        // other options
      },
    },
  });
});
