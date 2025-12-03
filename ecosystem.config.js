module.exports = {
  apps: [
    {
      name: "movilrapido",
      script: "npm",
      args: "start",
      port: 3008,
      env: {
        NODE_ENV: "production",
        PORT: 3008
      }
    }
  ]
};
