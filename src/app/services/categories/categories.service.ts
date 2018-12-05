import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

  private categories: any[] = [
    {
      id: 1,
      name: "Smartphones"
    },
    {
      id: 2,
      name: "Computers"
    },
    {
      id: 3,
      name: "Hardware",
      subCategories: [
        {
          id: 6,
          name: "Board",
          subCategories: [
            {
              id: 7,
              name: "RAM"
            }
          ]
        },
        {
          id: 8,
          name: "Fuente"
        }
      ]
    },
    {
      id: 4,
      name: "Software",
      subCategories: [
        {
          id: 5,
          name: "Windows"
        }
      ]
    }
  ];

  constructor() {
  }

  getCategories(): any[] {
    return this.categories;
  }
}
