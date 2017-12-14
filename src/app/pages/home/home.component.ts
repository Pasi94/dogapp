import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { Dog } from '../../model/dog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dog: Dog[];
  apiService: DogService;

  constructor(private apiServ: DogService) {
    this.apiService = this.apiServ;

  }

  ngOnInit() {
    this.apiService.getAll().subscribe(resp => {
      this.dog = JSON.parse(resp._body);
    },
      err => {
        console.log(err);
      });
  }

}

