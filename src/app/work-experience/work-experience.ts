import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkExperienceService } from '../services/work-experience-service/work-experience';

@Component({
  selector: 'app-work-experience',
  standalone: false,
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss',
})
export class WorkExperienceComponent implements OnInit {
  workExperienceData$!: Observable<any[]>;

  constructor(public workExperienceService: WorkExperienceService) {
    console.log(this.workExperienceService);
  }

  ngOnInit() {
    this.workExperienceData$ = this.workExperienceService.getAll();
  }
}
