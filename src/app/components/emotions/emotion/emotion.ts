import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  forwardRef,
  input,
  InputSignal,
} from '@angular/core';
import {
  ControlValueAccessor, FormBuilder,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { IEmotion } from '../interfaces';
import {TuiSliderComponent} from '@taiga-ui/kit';

@Component({
  selector: 'app-emotion',
  imports: [FormsModule, TuiSliderComponent],
  templateUrl: './emotion.html',
  styleUrl: './emotion.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Emotion),
      multi: true,
    },
  ],
})
export class Emotion implements ControlValueAccessor {
  constructor(private cdr: ChangeDetectorRef) {}
  public emotion: InputSignal<IEmotion> = input({
    key: '',
    name: '...',
    type: 'other',
   } as IEmotion);
  private innerValue: number = 0;
  public disabled: boolean = false;

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: number) => void = () => {};

  get value(): number {
    return this.innerValue;
  }

  set value(v: number) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  onBlur() {
    this.onTouchedCallback();
  }
  writeValue(value: number) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
    this.cdr.detectChanges();
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
