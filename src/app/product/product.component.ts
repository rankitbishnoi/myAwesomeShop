import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsService} from '../products.service';
import {ProductDetails} from '../products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: string;
  productsDetails: ProductDetails;
  selectedKeys: string[];
  tempSelection: string[];
  quantity = 1;
  productState: {
    _id: string,
    images: string[],
    mark_price: number,
    name: string,
    sale_msg: string,
    sale_price: number
  };
  shortDescValue = true;

  static arrayEquality(arr1, arr2) {
    if (arr1.length !==  arr2.length) {return false; }

    for (let i = 0, l = arr1.length; i < l; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((query: Params) => {
      this.productId = query.id;
      this.productsService.getProductDetails(this.productId).subscribe(
        (result: ProductDetails) => {
          this.productsDetails = result;
          this.selectedKeys = result.selected_option_ids;
          this.selectedProduct();
        }
      );
    });
  }

  selectedProduct() {
    let counter = 0;
    this.productsDetails.product_variations.forEach(
      (product) => {
        if (ProductComponent.arrayEquality(product.sign, this.selectedKeys)) {
          this.productState = product;
          counter++;
        }
      }
    );
    if (counter === 0) { this.selectedKeys = this.tempSelection; }

  }

  expandDesc() {
    this.shortDescValue = !this.shortDescValue;
  }

  countNoOfAttr(id) {
    let count = 0;
    this.productsDetails.options.forEach(
      (option) => {
        if (option.attrib_id === id) { count++; }
      }
    );
    return count;
  }

  select(attrValueId, atrId) {
    const similarIds = [];
    this.tempSelection = this.selectedKeys;
    this.productsDetails.options.forEach(
      (option) => {
        if (option.attrib_id === atrId) { similarIds.push(option._id); }
      }
    );
    similarIds.forEach(
      (id) => {
        if (id === this.selectedKeys[0]) { this.selectedKeys[0] = attrValueId; }
        if (id === this.selectedKeys[1]) { this.selectedKeys[1] = attrValueId; }
      }
    );
    this.selectedProduct();
  }

  checkSelection(id) {
    let result = 'shadow-lg ';
    this.selectedKeys.forEach(
      (key) => {
        if (key === id) { result = 'C-green-back '; }
      }
    );
    return result;
  }

}
