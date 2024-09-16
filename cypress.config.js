const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://play.watch.tv.br/login",
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true, // Habilita a gravação de vídeos
    screenshotOnRunFailure: true, // Tira screenshots em caso de falha
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
