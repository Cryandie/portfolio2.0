import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public isCopied: boolean = false;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  copyEmail() {
    var copyText = document.getElementById('myEmail') as HTMLInputElement;

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    this.isCopied = true;
  }
}
