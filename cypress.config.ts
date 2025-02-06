import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
const fecha = new Date();

async function setupNodeEvents(on, config) {
  const bundler = createBundler({
    plugins: [createEsbuildPlugin(config)],
  });

  on('file:preprocessor', bundler);
  await addCucumberPreprocessorPlugin(on, config);

  require('cypress-mochawesome-reporter/plugin')(on);
  Object.keys(process.env).forEach((key) =>{
    config.env[key] = process.env[key];
  });

  return config;
}

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: `reports/report_${fecha.getDate()}_${fecha.getMonth() + 1}_${fecha.getFullYear()}`,
    reportPageTitle: 'Reporte de pruebas Ecosistema Digital/Transer',
    inlineAssets: true,
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
