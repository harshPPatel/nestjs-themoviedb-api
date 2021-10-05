<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS Node TheMovieDb</h3>

<div align="center">
  <a href="https://www.npmjs.com/package/@harshppatel/nestjs-themoviedb-api"><img src="https://img.shields.io/npm/v/@harshppatel/nestjs-themoviedb-api.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/@harshppatel/nestjs-themoviedb-api"><img src="https://img.shields.io/npm/l/@harshppatel/nestjs-themoviedb-api.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/@harshppatel/nestjs-themoviedb-api"><img src="https://img.shields.io/npm/dm/@harshppatel/nestjs-themoviedb-api.svg" alt="NPM Downloads" /></a>
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

### Introduction

This is a simple NestJS wrapper of [node-themoviedb](https://www.npmjs.com/package/node-themoviedb). This repo supports all the endpoints from the library. If I missed anything, **Contribute**! Looking forward to your PR/issue!

### Installation

```
npm i @harshppatel/nestjs-themoviedb-api node-themoviedb
```

### Usage

**Importing Module:**

```ts
import { TheMovieDbModule } from '@harshppatel/nestjs-themoviedb-api';

@Module({
  imports: [
    TheMovieDbModule.forRoot({
      API_KEY: '<Your API_KEY>', // You can also pass `language` option from node-themoviedb library
    }),
  ],
  providers: [],
  exports: [],
})
export class YourModule {}
```

**Importing Module Async:**

```ts
import { TheMovieDbModule } from '@harshppatel/nestjs-themoviedb-api';

@Module({
  imports: [
    TheMovieDbModule.forAsyncRoot({
      useFactory: async () => {
        return {
          API_KEY: '<Your API_KEY>', // You can also pass `language` option from node-themoviedb library
        };
      },
    }),
  ],
  providers: [],
  exports: [],
})
export class YourModule {}
```

### Endpoint Example

Here is an example on how to use an endpoint from `node-themoviedb` library. You can learn more about these endpoints [here](https://github.com/andywampir/node-themoviedb).

```ts
import { TheMovieDbService } from '@harshppatel/nestjs-themoviedb-api';

@Injectable()
export class YourService {
  constructor(private readonly theMovieDbService: TheMovieDbService) {}

  async getHello() {
    const args = {
      pathParameters: {
        movie_id: 384018,
      },
    };
    return await this.theMoviedbService.getMovieEndpoint().getDetails(args);
  }
}
```

## Change Log

See [Changelog](CHANGELOG.md) for more information.

## Contributing

Contributions welcome! See [Contributing](CONTRIBUTING.md).

## Author

**Harsh Patel ([YouTube Channel](https://youtube.harshpatel.info))**

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
