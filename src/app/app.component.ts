import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Angular';
  isAdmin = true;

  imp: string = 'important ';
  date = new Date();

  ngOnInit(): void {}
}
