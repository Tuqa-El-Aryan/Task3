import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  activeLink: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activeLink = this.router.url;
    this.router.events.subscribe(() => {
      this.activeLink = this.router.url;
    });
  }

  setActive(link: string): void {
    this.activeLink = link;
  }
}
