const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false,
  EdgeWebSecurity: false,
  //multiple: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports'},
  
  e2e: {
    setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on)
    }
  },
});
