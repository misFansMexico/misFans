import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  menu = faBars;

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit(): void {}

  logout() {
    this.afAuth.signOut();
  }
}
