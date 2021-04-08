import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import swal from 'sweetalert2';

import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public user: User;
  public status: string | undefined;
  public identity: any;
  public token: any;

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

  onSubmit() {
    this._userService.singin(this.user).subscribe(
      response => {
        this.identity = response.user;
        console.log(this.identity);
        if (!this.identity) {
          this.status = 'error';
        } else {

          // PERSISTIR DATOS DEL USUARIO
          sessionStorage.setItem('identity', JSON.stringify(this.identity));

        }
      }
    );
  }

  login() {

    console.log("login");
    console.log("Correo: " + this.user.Correo);
    console.log("Password: " + this.user.Password);

    swal.fire({
      icon: 'success',
      title: '¡Bienvenido!'
    });

    this._router.navigate(['/home']);

  }

  principal() {
    this._router.navigate(['/homepage']);
  }

  goBack(){
    this._location.back();
  }

}
