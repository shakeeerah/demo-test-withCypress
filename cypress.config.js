const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      baseUrl: "http://uitestingplayground.com/",
      viewportHeight: 900,
      viewportWidth: 1500,
      watchForFileChanges: false,
      defaultCommandTimeout:20000,
      responseTimeout:30000,
      requestTimeout:30000


  },
});
