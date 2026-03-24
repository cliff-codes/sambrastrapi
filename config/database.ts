import path from 'path';
import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Database => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  // Build SSL config only with defined values
  const buildSslConfig = () => {
    if (!env.bool('DATABASE_SSL', false)) return false;

    const sslConfig: Record<string, any> = {
      rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
    };

    // Only add these if they're actually provided
    const sslKey = env('DATABASE_SSL_KEY', '');
    const sslCert = env('DATABASE_SSL_CERT', '');
    const sslCa = env('DATABASE_SSL_CA', '');

    if (sslKey) sslConfig.key = sslKey;
    if (sslCert) sslConfig.cert = sslCert;
    if (sslCa) sslConfig.ca = sslCa;

    return sslConfig;
  };

  // Build postgres connection - prefer DATABASE_URL if available
  const buildPostgresConnection = () => {
    const connectionString = env('DATABASE_URL', '');

    if (connectionString) {
      return {
        connectionString,
        ssl: buildSslConfig(),
      };
    }

    return {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      ssl: buildSslConfig(),
      schema: env('DATABASE_SCHEMA', 'public'),
    };
  };

  const connections = {
    mysql: {
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: buildSslConfig(),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    postgres: {
      connection: buildPostgresConnection(),
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};

export default config;

