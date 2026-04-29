import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from '../services/header-service/header';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent implements OnInit {
	headerData$!: Observable<any[]>;

	constructor(public headerService: HeaderService) {
		console.log(this.headerService);
	}

	ngOnInit() {
		this.headerData$ = this.headerService.getAll();
	}
}
