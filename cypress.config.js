const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  projectId: 'wxjn6a',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
   specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx,feature}',
    // specPattern : 'cypress/integration/practice_exercise/*.js',
    screenshotsFolder : 'cypress/screenshots'
  },
});


