import { DynamicModule, Module, Provider } from '@nestjs/common';
import MovieDB = require('node-themoviedb');
import { TheMovieDbOptionsAsync } from './interfaces/options-async.interface';
import { TheMovieDbOptions } from './interfaces/options.interface';
import { TheMovieDbService } from './themoviedb.service';
import { THE_MOVIE_DB_CONFIG } from './tokens/tokens';

// export function getHello(): string {
//   return 'Hello from the new package!';
// }

@Module({})
export class TheMovieDbModule {
  static forRoot(config: TheMovieDbOptions): DynamicModule {
    return {
      module: TheMovieDbModule,
      providers: [
        { provide: THE_MOVIE_DB_CONFIG, useValue: config },
        TheMovieDbService,
      ],
      exports: [TheMovieDbService],
    };
  }

  public static forAsyncRoot(config: TheMovieDbOptionsAsync) {
    return {
      module: TheMovieDbModule,
      imports: config.imports || [],
      providers: [this.createAsyncProviders(config), TheMovieDbService],
      exports: [TheMovieDbService],
    };
  }
  private static createAsyncProviders(
    options: TheMovieDbOptionsAsync,
  ): Provider {
    return {
      provide: THE_MOVIE_DB_CONFIG,
      useFactory: options.useFactory,
      inject: options.inject || [],
    };
  }
}
