import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
//import { AppComponent } from '../app.component'; 
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message'
  customMsgFromService:string
  customError : string
  name = ''

  constructor(private route : ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    //console.log(this.message)
    this.name = this.route.snapshot.params['name']

  }
  getWelcomeMessage(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleError(error)
    );
    //console.log('last line of welcome msg');
    //console.log("get welcome msg");

  }

  getWelcomeMessageWithVariable(){
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldPathVariableService(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleError(error)
    );
    //console.log('last line of welcome msg');
    //console.log("get welcome msg");

  }

  
  handleError(error){
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.customError = error.error.message;

  }
  handleSuccessfulResponse(response){
    this.customMsgFromService = response.msg;
    //console.log(response);
  }

}
