import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { HoverDirective } from './shared/directives/hover.directive';
import { SortPipe } from './shared/pipes/sort.pipe';
import { ShorTextPipe } from './shared/pipes/short-text.pipe';

@NgModule({
  declarations: [
    ListProductComponent,
    HoverDirective,
    ShorTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListProductComponent
  ],
  providers: [SortPipe]
})
export class ProductsModule { }
