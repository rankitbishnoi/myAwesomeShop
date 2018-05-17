import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getProducts(page) {
    return this.http.get(`https://assignment-appstreet.herokuapp.com/api/v1/products?page=${page}`).pipe(map(
      (resp: any) => resp.products
    ));
  }

  getProductDetails(id) {
    return this.http.get(`https://assignment-appstreet.herokuapp.com/api/v1/products/${id}`);
  }
}
