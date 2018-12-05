import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  categories: any[] = [];

  constructor(private _categoriesService: CategoriesService) {
  }

  ngOnInit() {
    initHeader();

    this.categories = this._categoriesService.getCategories();
    console.log(this.categories);
  }

}
