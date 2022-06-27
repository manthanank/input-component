import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inputs';
  text1FormControl = new FormControl('', [Validators.required]);
  text2FormControl = new FormControl('', [Validators.required]);
}
