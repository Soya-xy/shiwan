module.exports = {
  apps: [
    {
      name: 'MyPG',
      script: 'npx next start -p 2324',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '180M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
