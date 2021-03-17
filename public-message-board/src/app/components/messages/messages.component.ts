import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageRequest } from 'src/app/models/MessageRequest';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public messages;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.messageService.getMessages().subscribe(
      data => {
        this.messages = data;
      }
    )
  }

  deleteMessage(id: number) {
    this.messageService.deleteMessage(id).subscribe(
      data => {
        this.getMessages();
      }
    )
  }

}
