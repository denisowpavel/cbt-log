import { TuiRoot } from "@taiga-ui/core";
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TuiSliderComponent} from '@taiga-ui/kit';
import {Emotion} from './components/emotions/emotion/emotion';
import {Emotions} from './components/emotions/emotions';

@Component({
  selector: 'app-root',
  imports: [ Emotions],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {}
