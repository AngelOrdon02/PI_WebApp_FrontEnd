import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import swal from 'sweetalert2';

import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

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

  register() {

    console.log("Registrar");
    console.log("Carne: " + this.user.Carne);
    console.log("Nombres: " + this.user.Nombres);
    console.log("Apellido: " + this.user.Apellido);
    console.log("Correo: " + this.user.Correo);
    console.log("Password: " + this.user.Password);

    swal.fire({
      icon: 'success',
      title: '¡Bienvenido!'
    });

    this._router.navigate(['/home']);

  }

  principal(){
    this._router.navigate(['/homepage']);
  }

  goBack(){
    this._location.back();
  }

}
