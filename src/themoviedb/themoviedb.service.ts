import { Inject, Injectable } from '@nestjs/common';
import * as MovieDB from 'node-themoviedb';
import { TheMovieDbOptions } from '..';
import { THE_MOVIE_DB_CONFIG } from './tokens/tokens';

@Injectable()
export class TheMovieDbService {
  private readonly themoviedb: MovieDB;
  constructor(
    @Inject(THE_MOVIE_DB_CONFIG)
    private readonly config: TheMovieDbOptions,
  ) {
    this.themoviedb = new MovieDB(this.config.API_KEY, this.config);
  }
  getMovieEndpoint(): MovieDB.Endpoints.Movie {
    return this.themoviedb.movie;
  }
  getTVEndpoint(): MovieDB.Endpoints.TV {
    return this.themoviedb.tv;
  }
  getAccountEndpoint(): MovieDB.Endpoints.Account {
    return this.themoviedb.account;
  }
  getAuthenticationEndpoint(): MovieDB.Endpoints.Authentication {
    return this.themoviedb.authentication;
  }
  getCertificationEndpoint(): MovieDB.Endpoints.Certification {
    return this.themoviedb.certification;
  }
  getCollectionEndpoint(): MovieDB.Endpoints.Collection {
    return this.themoviedb.collection;
  }
  getCompanyEndpoint(): MovieDB.Endpoints.Company {
    return this.themoviedb.company;
  }
  getConfigurationEndpoint(): MovieDB.Endpoints.Configuration {
    return this.themoviedb.configuration;
  }
  getCreditEndpoint(): MovieDB.Endpoints.Credit {
    return this.themoviedb.credit;
  }
  getDiscoverEndpoint(): MovieDB.Endpoints.Discover {
    return this.themoviedb.discover;
  }
  getFindEndpoint(): MovieDB.Endpoints.Find {
    return this.themoviedb.find;
  }
  getGenreEndpoint(): MovieDB.Endpoints.Genre {
    return this.themoviedb.genre;
  }
  getGuestSessionEndpoint(): MovieDB.Endpoints.GuestSession {
    return this.themoviedb.guestSession;
  }
  getKeywordEndpoint(): MovieDB.Endpoints.Keyword {
    return this.themoviedb.keyword;
  }
  getListEndpoint(): MovieDB.Endpoints.List {
    return this.themoviedb.list;
  }
  getNetworkEndpoint(): MovieDB.Endpoints.Network {
    return this.themoviedb.network;
  }
  getPersonEndpoint(): MovieDB.Endpoints.Person {
    return this.themoviedb.person;
  }
  getReviewEndpoint(): MovieDB.Endpoints.Review {
    return this.themoviedb.review;
  }
  getSearchEndpoint(): MovieDB.Endpoints.Search {
    return this.themoviedb.search;
  }
  getTrendingEndpoint(): MovieDB.Endpoints.Trending {
    return this.themoviedb.trending;
  }
}
