import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users: any;
  firstname: string;
  lastname: string;
  emailid: string;
  imgsrc: string;
  company: string;


  constructor(private userservice: UserService, private authenticationService: AuthenticateService) { }

  ngOnInit() {
    this.getvalues();
  }

  getvalues(){
    this.userservice.getAll().subscribe(res=>{
  
      this.firstname = res.data.first_name;
      this.lastname = res.data.last_name;
      this.imgsrc = res.data.avatar;
      this.emailid = res.data.email;
      this.company = res.ad.company;
    }
    , err=>console.log(err));

  }

  logout() {
    this.authenticationService.logout();
}



}
