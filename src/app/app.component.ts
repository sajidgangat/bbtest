import { Component } from '@angular/core';
import *  as  data from "../mock/transactions.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peachtree';
  transactions = data.data;

  handleOnTransactionAdd(data) {
    this.transactions.push(data);
  }
}
