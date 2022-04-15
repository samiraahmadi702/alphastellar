import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ColorService} from '../../services/color.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {
  public menuItems = ['blue', 'red', 'green', 'whitesmoke', 'black', 'purple', 'yellow', 'brown', 'cyan', 'gray', 'orange'];
  form = new FormGroup({
    textFormField1: new FormControl('', [Validators.required]),
    textFormField2: new FormControl('', [Validators.required]),
    textFormField3: new FormControl('', [Validators.required]),
    textFormField4: new FormControl('', [Validators.required])
  });
  public selectedColor?: string;

  constructor(private router: Router, private colorService: ColorService, private titleService: Title) {
    titleService.setTitle('One');
    colorService.colorState.subscribe(res => {
      this.selectedColor = res;
    });
  }

  ngOnInit(): void {
  }

  public get isFormEmpty(): boolean {
    return Object.values(this.form.value).every(v => v === '' || v === null);
  }

  submit(): void {
    this.router.navigate(['page-two']).then();
  }

  reset(): void {
    this.form.reset();
  }

  selectColor(color: string): void {
    this.colorService.changeColorState(color);
  }
}
