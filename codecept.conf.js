const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/*_tests.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://recruiting-ac.simplifier.cloud',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    Test: './Pages/loginpage.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
  }
  },
  name: 'buildingmind',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    }
  }
}