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

  /**
   * Valida si un string es una URL válida
   */
  isValidUrl(url: string): boolean {
    if (!url || typeof url !== 'string') {
      return false;
    }
    try {
      // Validación básica: debe comenzar con http:// o https://
      return url.startsWith('http://') || url.startsWith('https://');
    } catch {
      return false;
    }
  }
}
