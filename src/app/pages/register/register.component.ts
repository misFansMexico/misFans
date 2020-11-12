import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  usuario: UsuarioModel;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.afAuth
      .createUserWithEmailAndPassword(this.usuario.email, this.usuario.password)
      .then((user) => {
        console.log(user);
        this.router.navigateByUrl(`/home`);
      });
  }

  log_facebook() {
    let provider = new auth.FacebookAuthProvider();
    this.afAuth.signInWithPopup(provider).then((user) => {
      console.log(user);
      this.router.navigateByUrl(`/home`);
    });
  }

  log_twitter() {
    let provider = new auth.TwitterAuthProvider();
    this.afAuth.signInWithPopup(provider).then((user) => {
      console.log(user);
      this.router.navigateByUrl(`/home`);
    });
  }
}
