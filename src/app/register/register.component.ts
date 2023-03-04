import { Component, OnInit , Input} from '@angular/core';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 @Input() public registerUser = {
      userName: "",
      password: "",
      password2: "",
  }
 
  warning;
  success: Boolean = false;
  loading: Boolean = false;
  constructor(private authService: AuthService) { }

   onSubmit(f): void {
     if(this.registerUser.userName != "" && this.registerUser.password == this.registerUser.password2) {
        this.loading =true;
        this.authService.register(this.registerUser).subscribe(
          () => {
            this.success = true;
            this.warning = null;
            this.loading = false;
          },
          (err) => {
            this.loading = false;
         this.success = false;
         this.warning = err.error.message;
          }
  )}else if(this.registerUser.password != this.registerUser.password2){

    this.success = false;
    this.warning = "Passwords Do Not Match";
    this.loading = false;

  };
}
  ngOnInit(): void {
  }

}
