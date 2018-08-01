module.exports = {
  apps: [{
    name: 'charlesPaulBennett',
    script: './server/app.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-193-121-79.us-west-1.compute.amazonaws.com',
      key: '~/.ssh/charlesPaulBennett.pem',
      ref: 'origin/master',
      repo: 'git@github.com:cpbennett4/charlesPaulBennett.git',
      path: '/home/ubuntu/charlesPaulBennett',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}