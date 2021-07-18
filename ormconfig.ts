import { isDev } from 'src/constants/environment';

console.log('===== process.env', process.env);

export default {
  type: 'mysql' as const,
  host: process.env.DATABASE_HOST || '',
  port: Number(process.env.DATABASE_PORT || ''),
  username: process.env.DATABASE_USER || '',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || '',
  entities: isDev ? ['src/**/*.entity.ts'] : ['dist/**/*.entity{.ts,.js}'],
  synchronize: isDev,
};
