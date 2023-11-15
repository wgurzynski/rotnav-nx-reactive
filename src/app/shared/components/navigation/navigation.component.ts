import { Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { ROUTE_NAMES } from '../../constants/routes.constants';
import { NavigationConnector } from './navigation.connector';
import { Observable } from 'rxjs';
import { EmissionsDropdownComponent } from '../../../pages/emissions-page/components/emissions-dropdown/emissions-dropdown.component';
import { EmissionsPageConnector } from '../../../pages/emissions-page/emissions-page.connector';
import { EmissionChartStructure, EmissionsDropdownOption } from '@shared/models/emissions.model';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, TabMenuModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  private readonly navigationConnector: NavigationConnector = inject(NavigationConnector);
  readonly menuItems: MenuItem[] = this.navigationConnector.menuItems;
  activeItem$: Observable<MenuItem> = this.navigationConnector.activeItem$;
}
