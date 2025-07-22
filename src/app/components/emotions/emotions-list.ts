import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  OnInit,
} from '@angular/core';
import { Emotion } from './emotion/emotion';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  UntypedFormBuilder,
} from '@angular/forms';
import { IEmotion } from './interfaces';
import { EmotionsListData } from '../../settings';

@Component({
  selector: 'app-emotions',
  imports: [Emotion, ReactiveFormsModule],
  templateUrl: './emotions-list.html',
  styleUrls: ['./emotions-list.scss', './emotion-colors.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmotionsList),
      multi: true,
    },
  ],
})
export class EmotionsList implements OnInit, ControlValueAccessor {
  public list: IEmotion[] = EmotionsListData;
  public emotionsFormGroup: FormGroup;
  private innerValue: any = '';
  public disabled: boolean = false;

  constructor(
    private fb: UntypedFormBuilder,
    private cdr: ChangeDetectorRef,
  ) {}
  public ngOnInit() {
    const emotionsFormGroupObject: any = {};
    this.list.forEach((emotion) => {
      emotionsFormGroupObject[emotion.key] = [0];
    });
    this.emotionsFormGroup = this.fb.group(emotionsFormGroupObject);
    this.emotionsFormGroup.valueChanges
      //.pipe(takeUntilDestroyed()) //TODO
      .subscribe((value) => {
        this.value = value;
      });
    this.cdr.detectChanges();
  }

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  get value(): Record<string, number> {
    return this.innerValue;
  }

  set value(v: Record<string, number>) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  onBlur() {
    this.onTouchedCallback();
  }
  writeValue(value: Record<string, number>) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      if (!value) {
        return;
      }
      this.emotionsFormGroup.patchValue(value)
      this.cdr.detectChanges()
    }
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
