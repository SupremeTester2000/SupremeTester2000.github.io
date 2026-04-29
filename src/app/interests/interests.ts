import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InterestsService } from '../services/interests-service/interests';

@Component({
  selector: 'app-interests',
  standalone: false,
  templateUrl: './interests.html',
  styleUrl: './interests.scss',
})
export class InterestsComponent implements OnInit {
  interestsData$!: Observable<any[]>;

  constructor(public interestsService: InterestsService) {
    console.log(this.interestsService);
  }

  ngOnInit() {
    this.interestsData$ = this.interestsService.getAll();
  }
}
