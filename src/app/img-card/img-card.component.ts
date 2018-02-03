import { Component, OnInit } from '@angular/core';
import { log } from 'util';

class CatImage {
  format: string;
  api: string;
  results_per_page: number;
}

class Button {
  text: string;
  disabled: boolean;
  color: string;
}

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.scss']
})

export class ImgCardComponent implements OnInit {

  private image: CatImage = {
    format: 'src',
    api: 'http://thecatapi.com/api/images/get',
    results_per_page: 1
  };

  public button: Button = {
    text: 'Give me another cat',
    color: 'primary',
    disabled: false
  };

  public src: string;

  constructor() { }

  ngOnInit() {
    this.src = this.image.api + "?format=" + this.image.format + "&results_per_page=" + this.image.results_per_page;

    if (!navigator.onLine) {
      this.button.text = 'Sorry. you\'re offline';
      this.button.disabled = true;
    }
  }

  public generateSrc(): void {
  this.src = this.src.replace(/\&ts=[\w]*/gi, '') + '&ts=' + Date.now();
  }

}
