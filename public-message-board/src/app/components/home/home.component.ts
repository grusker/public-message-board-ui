import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  messageForm: FormGroup;
  validMessage = '';

  constructor(private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.messageForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    
    this.initUsernamePassword();
  }

  initUsernamePassword() {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      this.messageForm.controls['username'].setValue(localStorage.getItem('username'));
      this.messageForm.controls['password'].setValue(localStorage.getItem('password'));
    }
  }

  login() {
    if (this.messageForm.valid) {
      localStorage.setItem('username', this.messageForm.get("username").value);
      localStorage.setItem('password', this.messageForm.get("password").value);
      this.getMessages();
    } else {
      this.validMessage = "Please fill the form!";
    }
  }

  getMessages() {
    this.messageService.getMessages().subscribe(
      data => {
        this.router.navigate(['messages']);
      }
    )
  }

}
