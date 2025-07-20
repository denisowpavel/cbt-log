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

@Component({
  selector: 'app-emotions',
  imports: [Emotion, ReactiveFormsModule],
  templateUrl: './emotions.html',
  styleUrl: './emotions.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class Emotions implements OnInit {
  public list: IEmotion[] = [
    { key: 'anxiety', name: 'Тревога', type: 'anxious' },
    { key: 'fear', name: 'Страх', type: 'anxious' },
    { key: 'fright', name: 'Испуг', type: 'anxious' },
    { key: 'panic', name: 'Паника', type: 'anxious' },

    { key: 'irritation', name: 'Раздражение', type: 'negative' },
    { key: 'anger', name: 'Злость', type: 'negative' },
    { key: 'annoyance', name: 'Досада', type: 'negative' },
    { key: 'wrath', name: 'Гнев', type: 'negative' },
    { key: 'fury', name: 'Ярость', type: 'negative' },

    { key: 'joy', name: 'Радость', type: 'positive' },
    { key: 'pleasure', name: 'Удовольствие', type: 'positive' },

    { key: 'depression', name: 'Подавленность', type: 'other' },
    { key: 'sadness', name: 'Грусть', type: 'other' },
    { key: 'sorrow', name: 'Печаль', type: 'other' },
    { key: 'interest', name: 'Интерес', type: 'other' },
    { key: 'contempt', name: 'Презрение', type: 'other' },
    { key: 'disgust', name: 'Отвращение', type: 'other' },
    { key: 'guilt', name: 'Вина', type: 'other' },
    { key: 'shame', name: 'Стыд', type: 'other' },
  ];

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
