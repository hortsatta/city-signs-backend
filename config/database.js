module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_DEV_HOST', '127.0.0.1'),
      port: env.int('DATABASE_DEV_PORT', 3306),
      database: env('DATABASE_DEV_NAME', 'strapi'),
      user: env('DATABASE_DEV_USERNAME', 'strapi'),
      password: env('DATABASE_DEV_PASSWORD', 'strapi'),
      ssl: env.bool('DATABASE_DEV_SSL', false),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_DEV_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
