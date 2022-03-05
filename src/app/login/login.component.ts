import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  recordarCredenciales = false;
  mostrarFormLogin = true;
  mostrarFormRegistro = false;

  // Datos para alta de cuenta
  datosAltaCuenta =  {
    "nombre": "",
    "apellidos": "",
    "email" : ""
  };

  // Datos ingreso
  datosIngreso = {
    "usuario" : "",
    "password" : ""
  };
 


  constructor( 
    public dialog: MatDialog,
    private navegacion: Router ) { }

    irHome() {
      this.navegacion.navigate(['home']);
    }

  ngOnInit(): void {
  }

  viewFormRegistro () {
    this.mostrarFormRegistro = true;
    this.mostrarFormLogin = false;
  }

  viewFormLogin () {
    this.mostrarFormRegistro = false;
    this.mostrarFormLogin = true;
  }

  validarDatosCuenta (){
    if (this.datosAltaCuenta.nombre != "" && this.datosAltaCuenta.apellidos != ""
    && this.datosAltaCuenta.email != "" && this.emailValido(this.datosAltaCuenta.email)) {
      this.crearCuenta();
    } else {
      this.datosFaltantes();
    }
  }

  crearCuenta () {
    const dialogRef = this.dialog.open(msgCuentaAltaExito);

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  datosFaltantes() {
    const dialogRef = this.dialog.open(msgDatosFaltantes);

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ingresar () {
    if (this.datosIngreso.usuario == "user" && this.datosIngreso.password == "root") {
      // Aqui debemos de mandar a la page principal
      this.irHome();
    } else {
      this.datosFaltantes();
    }
  }

  emailValido(email: string):boolean {
    let mailValido = false;
      'use strict';

      var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (email.match(EMAIL_REGEX)){
        mailValido = true;
      }
    return mailValido;
  }

}

@Component({
  selector: 'app-login',
  templateUrl: 'mensaje-error.html',
})
export class msgDatosFaltantes {}

@Component({
  selector: 'app-login',
  templateUrl: 'mensaje-alta-exito.html',
})
export class msgCuentaAltaExito {}
