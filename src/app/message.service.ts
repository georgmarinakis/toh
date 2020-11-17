import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = []; // new empty array

  // add messages in the cache (array)
  add(message: string) {
    this.messages.push(message); //add a new item in an array
  }

  // clear the cache (array)
  clear() {
    this.messages = [];
  }

  constructor() { }
}
