import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguagesService } from '../services/languages-service/languages';

@Component({
  selector: 'app-languages',
  standalone: false,
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
})
export class LanguagesComponent implements OnInit {
  languagesData$!: Observable<any[]>;

  constructor(public languagesService: LanguagesService) {
    console.log(this.languagesService);
  }

  ngOnInit() {
    this.languagesData$ = this.languagesService.getAll();
  }
}
