import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: 'banco_de_dados.sqlite',
  migrations: ['dist/src/migrations/*.js'],
  entities: ['dist/**/entidades/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
