const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false,
  EdgeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
