import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DogService } from '../../services/dog.service';
import { Dog } from '../../model/dog';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {

  currentRoute: any;
  dog: Dog;

  constructor(private dogService: DogService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.currentRoute = activatedRoute;
    this.dog = {
      id: '',
      name: '',
      image: '',
    };
    this.currentRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this.dogService.getDog(id).subscribe(resp => {
        this.dog = JSON.parse(resp._body);

      });
    });
  }

  ngOnInit() {

  }


}
