import { HomeServiceService } from './../services/home-service.service';
import { RouterModule, Router } from '@angular/router';
import { Component, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  @Output() formData: [];
  public homeForm: FormGroup;
  constructor(private router: Router) {

  }

  ngOnInit(){

    this.homeForm=this.formGroup(this.homeForm);
    console.log(this.homeForm.value);
  }

  redirectTable(){
    // console.log(this.homeForm);
    this.setData();
    this.router.navigate(['/tables']);

  }

  public setData(){
    const formValue = this.homeForm.value;
    // console.log(formValue);
    // console.log(this.homeForm.value);
    HomeServiceService.data={pageIndex: formValue.index, pageSize: parseInt(formValue.pageSize,10), length};
  }

  formGroup(home){
    return new FormGroup({
      index: new FormControl(home !== undefined && home.index !== undefined ? home.index : 0),
      pageSize: new FormControl(home !==undefined && home.pageSize !== undefined ?  parseInt(home.pageSize,10) : 10),
      typeOf: new FormControl(home !== undefined && home.typeOf !== undefined ? home.typeOf : '')
    });
  }
}

