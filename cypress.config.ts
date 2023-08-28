import { defineConfig } from 'cypress';
import { pluginGrep } from "@mmisty/cypress-grep/plugins";

module.exports = defineConfig({
  e2e: {
    env: {
      GREP_showExcludedTests: false,
      GREP_failOnNotFound: false
    },
    specPattern: 'cypress/e2e/**/*.cy.ts',
    setupNodeEvents(on, config) {
      pluginGrep(on, config);
      
      console.log(config.env);
      
      // important to return config
      return config;
    },
  },
});
