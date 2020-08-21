import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.css']
})
export class TransferFormComponent implements OnInit {
  myamount = 5824.76;
  transfer = {
    fromAccount: "",
    merchant: "",
    amount: "",
    transactionDate: 0
  }
  @Output() onTransactionAdd = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    let myaccount = "Free Checking(4692) - " + this.myamount;
    this.transfer.fromAccount = myaccount;
  }

  onSubmitClick() {
    this.transfer.transactionDate = new Date().getTime();
    this.onTransactionAdd.emit(this.transfer);
  }

}
