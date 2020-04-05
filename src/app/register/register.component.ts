import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy, OnChanges {

  constructor() { }

  ngOnInit(): void {
    console.log("asdsada");
  }

  ngOnDestroy(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
