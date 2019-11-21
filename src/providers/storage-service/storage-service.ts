import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '../../config/storage_keys.config';
import { localUser } from '../../models/local_user';

/*
  Generated class for the StorageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StorageServiceProvider Provider');
  }
  getLocalUser() : localUser{
    let usr = localStorage.getItem(STORAGE_KEYS.localUser);
    if(usr == null){
      return null;
    }
    else{
      return JSON.parse(usr);
    }
  }
  setLocalUser(obj : localUser){
    if(obj == null){
      localStorage.removeItem(STORAGE_KEYS.localUser);
    }
    else{
      localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }
  }
}
