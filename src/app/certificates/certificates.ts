import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CertificatesService } from '../services/certificates-service/certificates';

@Component({
  selector: 'app-certificates',
  standalone: false,
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class CertificatesComponent implements OnInit {
  certificatesData$!: Observable<any[]>;

  constructor(public certificatesService: CertificatesService) {
    console.log(this.certificatesService);
  }

  ngOnInit() {
    this.certificatesData$ = this.certificatesService.getAll();
  }
}
