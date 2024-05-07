import { Injectable } from '@angular/core';
import PocketBase, {RecordAuthResponse, RecordModel} from 'pocketbase';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pb = new PocketBase('http://127.0.0.1:8090')

  constructor(private router: Router
  ) { }

  login(email:string, password:string) : void{
    this.pb.collection('users').authWithPassword(
      email,
      password,
    ).then(
      () => {
        this.router.navigate(['/home'])
      }
    );
  }

  getAuthToken() : string {
    return this.pb.authStore.token
  }

}
