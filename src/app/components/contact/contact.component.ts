import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public isCopied: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  copyEmail() {
    var copyText = document.getElementById('myEmail') as HTMLInputElement;

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    this.isCopied = true;
  }
}
