import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageRequest } from 'src/app/models/MessageRequest';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  messageForm: FormGroup;
  validMessage = '';

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageForm = new FormGroup({
      content: new FormControl('', Validators.required)
    });
  }

  createMessage() {
    if (this.messageForm.valid) {
      let messageRequest: MessageRequest = new MessageRequest();
      messageRequest.content = this.messageForm.get("content").value;
      this.messageService.createMessage(messageRequest).subscribe(
        data => {
          this.validMessage = "Message created successfully.";
          this.messageForm.get("content").reset();
          return true;
        }
      )
    } else {
      this.validMessage = "Please fill the form!";
    }
  }

}
