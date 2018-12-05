import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  categories:any[] = [];

  constructor(private _categoriesService: CategoriesService) { }

  ngOnInit() {
    initShop();

    this.categories = this._categoriesService.getCategories();
  }
}
