module.exports = {
  apps: [{
    name: 'charlesPaulBennett',
    script: './server/app.js'
  }],
  deploy: {
    production: {
      user: 'chucky',
      host: 'charlesPaulBennett.com',
      key: '~/.ssh/charlesPaulBennett/charlesPaulBennett',
      ref: 'origin/master',
      repo: 'git@github.com:cpbennett4/charlesPaulBennett.git',
      path: '/home/chucky/apps/charlesPaulBennett',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}