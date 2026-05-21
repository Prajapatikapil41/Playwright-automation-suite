const demoUsers = {
  contact: {
    email: 'qa@example.com',
    name: 'Playwright QA',
    message: 'Hello from automated Playwright test.'
  }
};

const products = {
  phone: 'Samsung galaxy s6',
  laptop: 'Sony vaio i5',
  monitor: 'Apple monitor 24'
};

function uniqueUsername() {
  return `pwuser_${Date.now()}`;
}

function uniquePassword() {
  return `pwpass_${Date.now()}`;
}

module.exports = {
  demoUsers,
  products,
  uniqueUsername,
  uniquePassword
};