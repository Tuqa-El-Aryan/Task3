import { Component, OnInit, ViewChild,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router, RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export interface Rule {
  ruleName: string;
  module: string;
  countryFlag: string;
  status: string;
}

const ELEMENT_DATA: Rule[] = [
  { ruleName: 'Country General', module: 'Onboarding', countryFlag: 'assets/flags/us.png', status: 'Active' },
  { ruleName: 'Country General', module: 'Onboarding', countryFlag: 'assets/flags/jordan.png', status: 'Draft' },
  { ruleName: 'Scheduling', module: 'Leaves', countryFlag: 'assets/flags/jordan.png', status: 'Ready' },
  { ruleName: 'Country General', module: 'Onboarding', countryFlag: 'assets/flags/ksa.png', status: 'Inactive' },
  { ruleName: 'Time tracking', module: 'Attendance', countryFlag: 'assets/flags/armenia.png', status: 'Active' }
];

@Component({
  selector: 'app-rules-engine',
  standalone: true,
  imports: [ 
    
    RouterLink,
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    
  ],
  templateUrl: './rules-engine.component.html',
  styleUrls: ['./rules-engine.component.css']
})
export class RulesEngineComponent implements OnInit {
  displayedColumns: string[] = ['ruleName', 'module', 'country', 'status', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  searchControl = new FormControl();
  activeLink: string = '';

  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit(): void {
    this.activeLink = this.router.url;
    this.router.events.subscribe(() => {
      this.activeLink = this.router.url;
    });

    this.searchControl.valueChanges.subscribe(value => {
      this.applyFilter(value);
    });
  }

  setActive(link: string): void {
    this.activeLink = link;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getModuleClass(module: string): string {
    switch (module) {
      case 'Onboarding':
        return 'onboarding-bg';
      case 'Leaves':
        return 'leaves-bg';
      case 'Attendance':
        return 'attendance-bg';
      case 'Billing':
        return 'billing-bg';
      case 'Settings':
        return 'settings-bg';
      default:
        return '';
    }
  }
}
