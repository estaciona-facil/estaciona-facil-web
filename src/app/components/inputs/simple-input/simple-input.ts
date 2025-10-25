import { Component, forwardRef, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'simple-input',
  standalone: true,
  imports: [FormsModule, NgxMaskDirective],
  templateUrl: './simple-input.html',
  styleUrls: ['./simple-input.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SimpleInput),
    multi: true,
  },
  provideNgxMask()
],
})
export class SimpleInput implements ControlValueAccessor {
  @Input() id: string = '';
  @Input() label = '';
  @Input() placeholder?: string = '';
  @Input() maxlength?: number;
  @Input() type: 'text' | 'password' | 'number' = 'text';
  @Input() disabled = false;
  @Input() mask?: string;

  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();

  @Input() dropSpecialCharacters: boolean = true;

  @Input() input?: (e: Event) => void;

  @Output() blur = new EventEmitter<FocusEvent>();
  @Input() name!: string; // ← adicionado


  // value: any = '';
  private onChange: (v: any) => void = () => { };
  private onTouched: () => void = () => { };

  constructor(private cdr: ChangeDetectorRef) { }

  writeValue(v: any): void {
    this.value = (v ?? '') as any;
  }

  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  handleInput(e: Event) {
    const el = e.target as HTMLInputElement;
    const raw = el.value;
    const next = this.type === 'number'
      ? (raw === '' ? null : Number(raw))
      : raw;
    this.value = raw;
    this.onChange(next);
    this.input?.(e);
  }

  handleBlur(event: FocusEvent) {
    this.onTouched?.();
    this.blur.emit(event);
  }
}
