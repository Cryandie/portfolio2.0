import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-details-nav',
  templateUrl: './projects-details-nav.component.html',
  styleUrls: ['./projects-details-nav.component.css'],
})
export class ProjectsDetailsNavComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
