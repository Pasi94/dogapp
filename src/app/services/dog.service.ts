import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { Dog } from '../model/dog';

@Injectable()
export class DogService {

  private endpoint = 'dog';

  constructor(private apiService: APIService) { }

  getAll(): any {
    return this.apiService.get(this.endpoint);
  }

  getDog(dogId: string): any {
    return this.apiService.get(this.endpoint + '/' + dogId);
  }

}