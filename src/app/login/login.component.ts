import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare function initThemePlugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
      private router: Router
  ) { }

  ngOnInit(): void {
      initThemePlugins();
  }

  ngOnDestroy(): void {
  }

  ingresar(){
    this.router.navigate(['/dashboard']);
  }

}
