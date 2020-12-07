import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  myForm : FormGroup = new FormGroup({
    "userName": new FormControl("",[Validators.required,Validators.pattern("^[-a-zA-Z]+$")]),
    "userSurname": new FormControl("",[Validators.required,Validators.pattern("^[-a-zA-Z]+$")]),
    "userAge": new FormControl("",[Validators.required,Validators.pattern("^[0-9]+$")])
});

  constructor(private router: Router) {}
  submit(){
    console.log(this.myForm.value);
    this.router.navigate(['/Page2'],{ state: this.myForm.value });
}
  ngOnInit(): void {
  }

}