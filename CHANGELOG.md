# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3] - 2021-10-05

### Changed

- Updated dependencies versions to latest

## [1.0.2] - 2021-10-04

### Changed

- Updated package.json file to use updated destination files for npm publish
- Updated ReadMe file

## [1.0.1] - 2021-10-04

### Changed

- Removed unnecessary `console.log` statement from the constructor of TheMovieDbService
- Replaced `require` statement for MovieDB to `import` statement (in TheMovieDbService File)
- Removed unnecessary `apps` folder from the package. Now all the source code lives in `src` folder at root level

## [1.0.0] - 2021-10-04

### Added

- Created a NestJS wrapper for [node-themoviedb](https://www.npmjs.com/package/node-themoviedb) library.

[1.0.3]: https://github.com/harshPPatel/nestjs-themoviedb-api/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/harshPPatel/nestjs-themoviedb-api/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/harshPPatel/nestjs-themoviedb-api/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/harshPPatel/nestjs-themoviedb-api/releases/tag/v1.0.0
