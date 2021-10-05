import { ModuleMetadata } from '@nestjs/common/interfaces';
import MovieDB = require('node-themoviedb');
import { TheMovieDbOptions } from './options.interface';

export interface TheMovieDbOptionsAsync
  extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (
    ...args: any[]
  ) => TheMovieDbOptions | Promise<TheMovieDbOptions>;
  inject?: any[];
}
