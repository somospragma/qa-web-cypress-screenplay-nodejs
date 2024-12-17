import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

async function setupNodeEvents(on, config) {
  const bundler = createBundler({
    plugins: [createEsbuildPlugin(config)],
  });

  on('file:preprocessor', bundler);
  await addCucumberPreprocessorPlugin(on, config);

  return config;
}

export default defineConfig({
  //reporter: 'mochawesome',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    //reportDir: 'cypress/reports',
    //reportDir: `reports/report_${fecha.getDate()}_${fecha.getMonth + 1}_${fecha.getFullYear()}`,
    overwrite: false,
    html: false,
    json: true,
    charts: true,
  },
  e2e:
  {
    //baseUrl: 'https://demoqa.com/',
    setupNodeEvents,
    specPattern: "cypress/e2e/features/**.feature",
    chromeWebSecurity: false
  },
  env:{
  }
});
