import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  angForm: FormGroup;
  constructor(private reg: FormBuilder) {
    this.createForm();
  }
 
  ngOnInit() {
  }
 

  createForm() {
    this.angForm = this.reg.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      phno: ['', Validators.required ],
      password: ['', Validators.required ],
      address: ['', Validators.required ],
      gender: ['', Validators.required ],
      skills_ids: ['', Validators.required ],
      industry_id: ['', Validators.required ], 
      profile_image: ['', Validators.required ],
      state: ['', Validators.required ],

    });
  }


}
