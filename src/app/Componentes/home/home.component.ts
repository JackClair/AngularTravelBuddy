import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/service/location.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CreateUserService } from 'src/app/service/create-user.service';
import { CreateUser } from 'src/app/CreateUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Variables to be used in the html file
  currentUser : CreateUser;
  stringifiedData: string[] = [];
  Location: any;
  booking = {
    from !: "",
    to !: "",
    date !: ""
  }

  fetchLocation()
  {
    this.GetRequest.fetchLocation().subscribe(data => {
      this.Location = data;
      for (let i = 0; i < Object.keys(this.Location).length; i++)
      {
        this.stringifiedData.push(this.Location[i].locationName);
      }
    });
  }
  getBookingFormData()
  {
    if (this.validateForm())
    {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (this.currentUser == null)
      {
        alert("Please login to book a trip");
        this.appRoutingModule.redirectToLogin();

      }
      else
      {
        this.postRequest.sendUserData(this.currentUser);
      }
    }
  }
  validateForm()
  {
    if (this.booking.from == "" || this.booking.to == "" || this.booking.date == "")
    {
      alert("Please fill in all the fields");
      return false;
    }
    else if (this.booking.from == this.booking.to)
    {
      alert("Please select different destinations");
      return false;
    }
    else if (this.booking.date < new Date().toISOString().split('T')[0])
    {
      alert("Please select a future date");
      return false;
    }
    else 
    {
      console.log(this.booking);
      return true;
    }
  }

  constructor(private GetRequest : LocationService, private postRequest : CreateUserService, private appRoutingModule : AppRoutingModule) { 
    try {

      this.fetchLocation();
    } catch (error) {
      console.log("Error");
    }
  }

  ngOnInit(): void {

  }

}
