import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../modals/user";
import {AccountService} from "../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {};
  currentUser$: Observable<User | null> = of(null);

  constructor(private accountService: AccountService, private router: Router) {
  }
  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (user) => {
        this.router.navigateByUrl('/');
        this.model = {};
        console.log(user);
      }
    })
  }

  logout() {}
}
