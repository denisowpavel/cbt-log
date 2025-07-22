import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Emotion } from './emotion/emotion';
import {
  FormGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
} from '@angular/forms';
import { IEmotion } from './interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {EmotionsList} from '../../settings';

@Component({
  selector: 'app-emotions',
  imports: [Emotion, ReactiveFormsModule],
  templateUrl: './emotions.html',
  styleUrl: './emotions.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class Emotions implements OnInit {
  public list: IEmotion[] = EmotionsList;

  public emotionsFormGroup: FormGroup;

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
      //.pipe(takeUntilDestroyed())
      .subscribe((value) => {
        console.log('>', value);
      });
    this.cdr.detectChanges();
  }
}
