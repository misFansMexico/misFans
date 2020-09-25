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
      console.log(this.route.getCurrentNavigation());
      // if (user) this.route.navigateByUrl(`/home`);
      // else this.route.navigateByUrl(`/login`);
      if (!user) this.route.navigateByUrl(`/login`);
    });
  }
}
