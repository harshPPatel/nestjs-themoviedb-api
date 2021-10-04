import { Injectable } from '@nestjs/common';
import { TheMovieDbService } from '../../nestjs-themoviedb-api/src';

@Injectable()
export class TestService {
  constructor(private readonly theMoviedbService: TheMovieDbService) {}
  async getHello() {
    const args = {
      pathParameters: {
        movie_id: 384018,
      },
    };
    return await this.theMoviedbService.getMovieEndpoint().getDetails(args);
  }
}
