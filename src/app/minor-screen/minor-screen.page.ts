import { Component, OnInit } from '@angular/core';
// import twilio from 'twilio';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-minor-screen',
  templateUrl: './minor-screen.page.html',
  styleUrls: ['./minor-screen.page.scss'],
})
export class MinorScreenPage implements OnInit {
  email: string;
  phoneNumber: any;
  sentToEmails: string[] = [""]
  sentToNumbers: number[] = [0]
   accountSid = "AC04058b1f2cd44f2f88da3f6c6d526fc1";
   authToken = "dc80d5b74331f7b2830e0c162d4a39cb";
  firstTimeEmail: boolean = true; 
  firstTimeNumber: boolean = true; 
  // const client = new twilio(accountSid, authToken);
  message: string = "A minor has requested your permission to particpate in MASS VR. Please review the following link and fill out the attached form."
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


   validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  validatePhoneNumber(number) {
    var phoneno = /^\d{10}$/;
    if(number.match(phoneno))
    {
        return true;
    }
    else
    {
      
       return false;
    }
  }
  sendSMS()
  {
    if (this.validatePhoneNumber(this.phoneNumber)) {
      alert("SMS Sent to " + this.phoneNumber)
      this.sentToNumbers.push(this.phoneNumber);
      console.log(this.sentToNumbers)
      if ( this.firstTimeNumber == true) {
       this.sentToNumbers.shift()
       this.firstTimeNumber = false
      

       this.http.get('https://us-central1-massvrwaiver.cloudfunctions.net/sendSMS?number=' + this.phoneNumber.toString() + "&message=" + this.message).subscribe((response) => {
        console.log(response);
    });

     }
    } else {

      alert("Not a valid Phone Number")
    }
    }
   
  
  sendEmail() {

    if (this.email.trim() == "") {
      alert ("Please enter an Email." )
    } else {

      if (this.validateEmail(this.email)) {
        alert ("Email Sent to " + this.email)
        
         this.sentToEmails.push(this.email);
         console.log(this.sentToEmails)
         if ( this.firstTimeEmail == true) {
          this.sentToEmails.shift()
          this.firstTimeEmail = false

        }
      } else {
        alert("Please enter a Valid Email. ")
      }

    }

  }
}
