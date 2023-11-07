import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownChangeEvent } from 'primeng/dropdown/dropdown.interface';

@Component({
  selector: 'app-emissions-dropdown',
  standalone: true,
  imports: [CommonModule, DropdownModule, ReactiveFormsModule],
  templateUrl: './emissions-dropdown.component.html',
  styleUrls: ['./emissions-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmissionsDropdownComponent implements OnInit {
  @Output() changeSelectedOption: EventEmitter<DropdownOption> =
    new EventEmitter<DropdownOption>();
  @Input() set selectedOption(selectedOption: DropdownOption | null) {
    this.formGroup?.get('selectedOption')?.setValue(selectedOption);
  }
  @Input({ required: true })
  options!: DropdownOption[] | null;
  formGroup: FormGroup | undefined;

  ngOnInit() {
    this.formGroup = new FormGroup({
      selectedOption: new FormControl<DropdownOption | null>(null),
    });
  }

  onChangeSelectedOption({ value }: DropdownChangeEvent): void {
    this.changeSelectedOption.emit(value);
  }
}

export interface DropdownOption {
  id: number;
}
