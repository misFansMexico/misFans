import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-creador',
  templateUrl: './creador.component.html',
  styleUrls: ['./creador.component.css'],
})
export class CreadorComponent implements OnInit {
  pre_registrado: boolean = false;
  faCheck = faCheck;
  creador = {
    nombre: '',
    username: '',
    description: '',
    img_portada: '',
    img_perfl: '',
    account_twitch: '',
    account_instagram: '',
    account_twitter: '',
    account_tiktok: '',
    account_facebook: '',
  };
  menu = faBars;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public af_firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.af_firestore
      .collection('creadores')
      .doc(id)
      .get()
      .subscribe((data: any) => {
        this.creador = { ...data.data() };
      });
  }

  pre_registro(status: boolean) {
    this.pre_registrado = status;
  }
}
