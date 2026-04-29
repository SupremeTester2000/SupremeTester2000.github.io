import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EducationService } from '../services/education-service/education';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent implements OnInit {
  educationData$!: Observable<any[]>;

  constructor(public educationService: EducationService) {
    console.log(this.educationService);
  }

  ngOnInit() {
    this.educationData$ = this.educationService.getAll();
  }
}
