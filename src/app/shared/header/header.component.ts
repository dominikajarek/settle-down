import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-header',
  imports: [MenubarModule, ThemeSwitcherComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  items: MenuItem[] | undefined;

  private navigationService = inject(NavigationService);

  ngOnInit() {
    this.items = this.navigationService.getNavigationItems();
  }
}
