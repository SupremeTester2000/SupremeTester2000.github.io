import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsService } from '../services/skills-service/skills';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent implements OnInit {
  skillsData$!: Observable<any[]>;

  constructor(public skillsService: SkillsService) {
    console.log(this.skillsService);
  }

  ngOnInit() {
    this.skillsData$ = this.skillsService.getAll();
  }
}
