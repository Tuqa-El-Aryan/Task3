import { RouterModule, Routes } from '@angular/router';
import { RulesEngineComponent } from './rules-engine/rules-engine.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    
    { path: '', component: RulesEngineComponent },
    { path: 'dashboard', component: DashboardComponent },
  { path: 'rules-engine', component: RulesEngineComponent },
];



