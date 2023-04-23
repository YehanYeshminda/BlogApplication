import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject, map} from "rxjs";
import {User} from "../modals/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl: string = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((res) => {
        const user = res;

        if (user) {
          this.setCurrentUser(user);
        }

        return user; // could be used to print
      })
    )
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map((user) => {
        this.setCurrentUser(user);
        return user;
      })
    )
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  setCurrentUser(user: User) {
    user.roles = [];

    const roles = this.getDecodedToken(user.token).role;
    Array.isArray(roles ? (user.roles) : user.roles.push(roles));

    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  getDecodedToken(token: string) {
    return JSON.parse(atob((token.split('.')[1])));
  }
}
