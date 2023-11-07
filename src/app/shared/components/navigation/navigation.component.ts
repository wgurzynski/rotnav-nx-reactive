import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { ROUTE_NAMES } from '../../constants/routes.constants';
import { NavigationConnector } from './navigation.connector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, TabMenuModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  readonly menuItems: MenuItem[] = this.navigationConnector.menuItems;
  activeItem$: Observable<MenuItem> = this.navigationConnector.activeItem$;

  constructor(private navigationConnector: NavigationConnector) {}
}
