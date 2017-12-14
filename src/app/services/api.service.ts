import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class APIService {

  url = environment.backendURL;

  constructor(
    private http: Http) { }


  get(endpoint: string, params?: any, options?: RequestOptions) {
    if (!options) {
      options = new RequestOptions();
    }

    // Support easy query params for GET requests
    if (params) {
      const p = new URLSearchParams();
      for (const k in params) {
        p.set(k, params[k]);
      }
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }

    if (!options.headers) {
      options.headers = new Headers();
    }

    options.headers.append('Content-Type', 'application/json');

    return this.http.get(this.url + '/' + endpoint, options);
  }


  // getList():any{
  //   return this.http.get("https://dog.ceo/api/breeds/list");
  // }

  //  getImageList(breed_type: string) {
  //    return this.http.get("https://dog.ceo/api/breed/" + breed_type + "/images");
  //  }

  //  getRandomImage():any {
  //    return this.http.get(`https://dog.ceo/api/breeds/image/random`)
  //  }
}
