module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        username: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi"),
        schema: env("DATABASE_SCHEMA", "public"), // Not Required
        ssl: false,
      },
      options: {},
    },
  },
});

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'mysql',
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 3306),
//         database: env('DATABASE_NAME', 'strapi'),
//         username: env('DATABASE_USERNAME', 'strapi'),
//         password: env('DATABASE_PASSWORD', 'strapi'),
//       },
//       options: {},
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "bookshelf",
//       settings: {
//         client: "mysql",
//         host: env("DATABASE_HOST", "127.0.0.1"),
//         port: env.int("DATABASE_PORT", 3306),
//         database: env("DATABASE_NAME", ""),
//         username: env("DATABASE_USERNAME", ""),
//         password: env("DATABASE_PASSWORD", ""),
//         ssl: {
//           rejectUnauthorized: false,
//         },
//       },
//       options: { ssl: true },
//     },
//   },
// });

// const parse = require('pg-connection-string').parse;
// const config = parse(process.env.DATABASE_URL);

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: config.host,
//         port: config.port,
//         database: config.database,
//         username: config.user,
//         password: config.password,
//         ssl: {
//           rejectUnauthorized: false,
//         },
//       },
//       options: {
//         ssl: true,
//       },
//     },
//   },
// });
