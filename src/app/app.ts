import {TuiButton, TuiRoot} from '@taiga-ui/core';
import { Component, signal } from '@angular/core';
import { EmotionsList } from './components/emotions/emotions-list';
import { EmotionsView } from './components/emotions/emotions-view/emotions-view';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    TuiRoot,
    EmotionsList,
    EmotionsView,
    FormsModule,
    TuiButton,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  v: Record<string, number> = { anxiety: 7, fear: 10 };
}
