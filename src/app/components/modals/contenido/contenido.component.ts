import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
})
export class ContenidoComponent implements OnInit {
  @ViewChild('file_media')
  file_media: ElementRef;
  @ViewChild('img_media')
  img_media: ElementRef;
  file: File | null = null;
  urlImage: Observable<string>;
  creadores = [];
  creador = '';

  constructor(
    private storage: AngularFireStorage,
    private af: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.af
      .collection('creadores')
      .get()
      .subscribe((creadores) => {
        this.creadores = [];
        creadores.forEach((creador) => {
          this.creadores.push(creador.id);
        });
      });
  }

  onClickFileInputButton(): void {
    this.file_media.nativeElement.click();
  }

  onChangeFileInput(): void {
    let files = [];
    let reader = new FileReader();

    files = this.file_media.nativeElement.files;
    if (files.length !== 0) {
      this.file = files[0];
      reader.onload = (event: any) => {
        this.img_media.nativeElement.src = event.target.result;
      };

      reader.onerror = (event: any) => {
        console.log('File could not be read: ' + event.target.error.code);
      };

      reader.readAsDataURL(this.file);
    }
  }

  async upload() {
    const id = Math.random().toString(36).substring(2);
    const filePath = `contenido/${this.creador}/${id}`;
    const ref = this.storage.ref(filePath);
    await ref.put(this.file);
    ref.getDownloadURL().subscribe((data) => {
      console.log(data);
    });
  }
}
