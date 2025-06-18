import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form', 
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})

export class UserFormComponent {
 userRegisterForm!: FormGroup;
 
 constructor(private fb: FormBuilder){
  this.userRegisterForm=this.fb.group({
   "username":['',Validators.required],
   "email":['',[Validators.required,Validators.email]],
  "contact":['',[Validators.required,Validators.minLength(10)]],

  })
  
}
onSubmit(){
    localStorage.setItem('userData', JSON.stringify(this.userRegisterForm.value));
      alert('Registration successful!');
      alert(localStorage.getItem('userData'));

}
}
