import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'misFans';

  constructor(private afAuth: AngularFireAuth, private route: Router) {
    this.afAuth.authState.subscribe((user) => {
      if (!user) this.route.navigateByUrl(`/login`);
    });
  }
}
