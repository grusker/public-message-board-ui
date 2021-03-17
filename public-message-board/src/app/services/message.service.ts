import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageRequest } from '../models/MessageRequest';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  createMessage(message: MessageRequest) {
    let body = JSON.stringify(message);
    return this.http.post('/server/messages', body);
  }

  getMessages() {
    return this.http.get('/server/messages');
  }

  deleteMessage(id: number) {
    return this.http.delete('/server/messages/' + id);
  }

  getMessage(id: number) {
    return this.http.get('/server/messages/' + id);
  }

  updateMessage(id: number, message: MessageRequest) {
    let body = JSON.stringify(message);
    return this.http.put("/server/messages/" + id, body);
  }
}
