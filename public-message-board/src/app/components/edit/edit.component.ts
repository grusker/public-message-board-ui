import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageRequest } from 'src/app/models/MessageRequest';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  messageForm: FormGroup;
  validMessage = '';
  messageId = 0;

  constructor(private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.messageForm = new FormGroup({
      content: new FormControl('', Validators.required)
    });
    this.messageId = this.route.snapshot.params.id
    this.getMessage(this.messageId);
  }

  getMessage(id) {
    this.messageService.getMessage(id).subscribe(
      data => {
        let _content = data['content'];
        this.messageForm.controls['content'].setValue(_content);
      }
    )
  }

  updateMessage(content: String) {
    let messageRequest: MessageRequest = new MessageRequest();
    messageRequest.content = this.messageForm.get("content").value;
    this.messageService.updateMessage(this.messageId, messageRequest).subscribe(
      data => {
        this.validMessage = "Message updated.";
      }
    )
  }

}
