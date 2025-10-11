import { afterNextRender, ChangeDetectionStrategy, Component } from '@angular/core';
import checklist from '../shared/models/checklist/checklist.json';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checklist',
  imports: [FormsModule, CardModule, CheckboxModule],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChecklistComponent {
  protected checklist = checklist;
  protected storedData = localStorage.getItem('checklist');
  protected jsonData = this.storedData ? JSON.parse(this.storedData) : null;

  constructor() {
    afterNextRender(() => {
      if (this.checklist) {
        this.checklist = this.jsonData;
      }
    });
  }

  saveToLocalStorage() {
    localStorage.setItem('checklist', JSON.stringify(this.checklist));
  }
}
