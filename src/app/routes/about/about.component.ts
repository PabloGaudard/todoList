import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  paragrafos: string[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getText().subscribe(response => {
      this.paragrafos = response;
    });
  }

}
