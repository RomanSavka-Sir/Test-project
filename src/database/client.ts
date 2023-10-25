import { Pool, PoolClient } from 'pg';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DbError } from './error';

@Injectable()
export class DbClient implements OnModuleInit {
  pool: Pool;
  client: PoolClient;

  constructor(private configService: ConfigService) {
    this.pool = new Pool({
      connectionString: this.configService.get('database.url')
    });
  }

  public async onModuleInit(): Promise<void> {
    await this.connect();
  }

  private async connect() {
    try {
      this.client = await this.pool.connect();
    } catch (e) {
      Logger.error(e);
      throw new DbError(e, 'Connection db Error');
    }
  }

  public async query(sql: string, values?: Array<any>): Promise<any> {
    try {
      return await this.client.query(sql, values);
    } catch (e) {
      throw new DbError(e, 'Query db error');
    }
  }

  public async transaction(body: () => Promise<void>) {
    try {
      await this.client.query('BEGIN');
      await body();
      await this.client.query('COMMIT');
    } catch (e) {
      await this.client.query('ROLLBACK');
      throw e;
    }
  }
}
