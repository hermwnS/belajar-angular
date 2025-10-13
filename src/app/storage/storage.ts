import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.html',
  styleUrl: './storage.css'
})
export class Storage implements OnInit {
  items: string[] = [];
  newItem: string = '';

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.items = this.storageService.getItems();
  }

  addItem(): void {
    if (this.newItem.trim() == ''){
      this.storageService.addItem(this.newItem.trim());
      this.newItem = '';
      this.loadItems();
    }
  }

  removeItem(index: number): void {
    this.storageService.removeItem(index);
    this.loadItems();
  }

  clearItems(): void {
    this.storageService.clearItems();
    this.loadItems();
  }
}
