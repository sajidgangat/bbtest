import { Component, OnInit, Input, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-recent-transaction',
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.css']
})
export class RecentTransactionComponent implements OnInit, OnChanges {
  @Input() transactions: any;
  search = "";
  filteredData = [];
  constructor() { }

  ngOnInit(): void {
    this.filteredData = this.transactions;
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  onSortByDate() {
    this.filteredData = this.transactions.sort((a, b) => (a.transactionDate > b.transactionDate) ? 1 : ((b.transactionDate > a.transactionDate) ? -1 : 0));
  }

  onSortByAccount() {
    this.filteredData = this.transactions.sort((a, b) => (a.merchant > b.merchant) ? 1 : ((b.merchant > a.merchant) ? -1 : 0));
  }

  onSortByAmount() {
    this.filteredData = this.transactions.sort((a, b) => (a.amount > b.amount) ? 1 : ((b.amount > a.amount) ? -1 : 0));
  }

  onSearch() {
    this.filteredData = this.transactions.filter(item => {
      return item.merchant.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 ||
        item.amount.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 ||
        item.transactionType.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
    })
  }
}
