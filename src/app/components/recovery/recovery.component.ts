import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import swal from 'sweetalert2';

import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css'],
  providers: [UserService]
})
export class RecoveryComponent implements OnInit {

  public user: User;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _location: Location,
    private _userService: UserService

  ) {
    this.user = new User("", "", "", "", "", "");
  }

  ngOnInit(): void {
  }

  recover() {

    console.log("Recuperar");
    console.log("Carné: " + this.user.Carne);
    console.log("Password: " + "Hola");

    swal.fire({
      icon: 'success',
      title: '¡Contraseña recuperada!',
      text: 'Hola'
    });

    this._router.navigate(['/login']);

  }

  principal() {
    this._router.navigate(['/homepage']);
  }

  goBack(){
    this._location.back();
  }

}
