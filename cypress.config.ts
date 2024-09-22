import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

async function setupNodeEvents(on, config) {

  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: true,
    charts: true,
  },
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/features/**.feature",
  },
  env:{
    baseUrl: 'https://demoqa.com/'
  }
});
