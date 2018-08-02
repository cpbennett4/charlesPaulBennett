module.exports = {
  apps: [{
    name: 'charlesPaulBennett',
    script: './server/app.js'
  }],
  deploy: {
    production: {
      user: 'chucky',
      host: 'ec2-54-153-95-193.us-west-1.compute.amazonaws.com',
      key: '~/.ssh/charlesPaulBennett/charlesPaulBennett',
      ref: 'origin/master',
      repo: 'git@github.com:cpbennett4/charlesPaulBennett.git',
      path: '/home/chucky/charlesPaulBennett',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}