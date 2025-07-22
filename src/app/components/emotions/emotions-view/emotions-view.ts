import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import { IEmotion } from '../interfaces';
import { EmotionsListData } from '../../../settings';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-emotions-view',
  imports: [],
  templateUrl: './emotions-view.html',
  styleUrls: ['./emotions-view.scss', '../emotion-colors.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EmotionsView {
  public list: IEmotion[] = EmotionsListData;
  public values: InputSignal<Record<string, number>> = input(
    {} as Record<string, number>,
  );
}
