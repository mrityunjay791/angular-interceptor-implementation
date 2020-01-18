import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: DataService) { 

  }

  ngOnInit() {
    let ref = this;

    ref.service.getSecondData().subscribe(data => {

    });
    setTimeout(function(){
      ref.service.getData().subscribe(data => {
      
      });
    }, 2000);
  

  }

}
