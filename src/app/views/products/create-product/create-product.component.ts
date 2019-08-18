import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import Product from '../product.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit, OnDestroy {
  createSubs: Subscription;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(product: Product) {
    this.createSubs= this.productService.createProduct(product)
      .subscribe((product: Product) => {
        this.router.navigate(['/products']);
      });
  }

  ngOnDestroy() {
    if(this.createSubs) {
      this.createSubs.unsubscribe();
    }
  }

}
