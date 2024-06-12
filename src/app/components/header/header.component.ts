import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgLogoComponent } from '../ng-logo/ng-logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgLogoComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() appName = 'ng-cookbook-recipe';
  @Input() appTitle = 'Angular Cookbook Recipe';
}

