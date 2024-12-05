module.exports = {
  apps: [
    {
      name: 'system-monitor',
      script: 'ts-node src/index.ts',
      interpreter: 'npx',
      watch: false,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
