import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-checklist',
  imports: [],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChecklistComponent {}
