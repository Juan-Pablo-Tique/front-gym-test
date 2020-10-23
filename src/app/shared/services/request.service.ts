import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';

import { UserRegister, GetUserList } from '@app/shared/interfaces/user.interface';
import { AddCity } from '@app/shared/interfaces/city.interface';
import { SingUp, Authentication } from '@app/shared/interfaces/authentication.interface.';
import { AddBranchOffice } from '@app/shared/interfaces/branch-office.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor( private http: HttpClient ) { }

  // Estas rutas las usaran los usuarios

  public getBranchOffices(){
    return this.http.get(environment.apiBaseUrl + '/user/branchOffices');
  }

  public getDocumentTypes(){
    return this.http.get(environment.apiBaseUrl + '/user/document_types');
  }

  public postRegister( request:UserRegister ){
    return this.http.post(environment.apiBaseUrl + '/register', request);
  }

  // Estas rutas las usaran los administradores

  public postLogin( request:Authentication ){
    return this.http.post(environment.apiBaseUrl + '/login', request);
  }

  public postSignUp( request:SingUp ){
    return this.http.post(environment.apiBaseUrl + '/admin/createNew', request);
  }

  public postCities( request:AddCity ){
    return this.http.post(environment.apiBaseUrl + '/admin/createCity', request);
  }

  public postBranchOffice( request:AddBranchOffice ){
    return this.http.post(environment.apiBaseUrl + '/admin/createBranch', request);
  }

  public getUserList( request:GetUserList ){
    return this.http.post(environment.apiBaseUrl + '/admin/userList', request);
  }
}