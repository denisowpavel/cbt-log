import { TuiRoot } from '@taiga-ui/core';
import { Component, signal } from '@angular/core';
import { Emotions } from './components/emotions/emotions';

@Component({
  selector: 'app-root',
  imports: [TuiRoot, Emotions],
  templateUrl: './app.html',
  styleUrls: ['./app.scss', './app.less'],
  standalone: true,
})
export class App {}
