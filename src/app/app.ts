import { TuiRoot } from "@taiga-ui/core";
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TuiSliderComponent} from '@taiga-ui/kit';

@Component({
  selector: 'app-root',
  imports: [TuiSliderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
}
