const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://drag-and-drop-taupe.vercel.app/",
    reporter: 'cypress-mochawesome-reporter',
  },
});