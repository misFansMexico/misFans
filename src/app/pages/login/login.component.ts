import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel;

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.afAuth
      .signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
      .then((user) => {
        console.log(user);
      });
  }

  log_facebook() {
    let provider = new auth.FacebookAuthProvider();
    this.afAuth.signInWithPopup(provider).then((user) => {
      console.log(user);
    });
  }

  log_twitter() {
    let provider = new auth.TwitterAuthProvider();
    this.afAuth.signInWithPopup(provider).then((user) => {
      console.log(user);
    });
  }
}