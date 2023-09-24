import { defineConfig } from "cypress";
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
    },
    
  },
});
