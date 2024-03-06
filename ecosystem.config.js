module.exports = {
  app: [
    {
      name: "portfolio",
      script: "npm",
      args: "run start -- --port 3000",
      cwd: "/var/www/portfolio",
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
    },
  ],
};
