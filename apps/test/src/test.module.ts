import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TheMovieDbModule } from '../../nestjs-themoviedb-api/src';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TheMovieDbModule.forRoot({ API_KEY: process.env.THEMOVIEDB_API_KEY }),
  ],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
