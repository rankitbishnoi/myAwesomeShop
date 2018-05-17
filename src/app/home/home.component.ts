import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Product} from '../products.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  page = 1;
  constructor(
    private productsService: ProductsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.productsService.getProducts(this.page).subscribe(
      (result: Product[]) => {
        this.products = result;
      }
    );
  }

  fetchMore() {
    this.page++;
    this.productsService.getProducts(this.page).subscribe(
      (result: Product[]) => {
        this.products.push(...result);
      }
    );
  }

  details(id) {
    this.router.navigate(['product', id])
  }
}
