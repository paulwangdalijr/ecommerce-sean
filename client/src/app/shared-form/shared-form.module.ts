import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailsformComponent } from './detailsform/detailsform.component';
import { DetailsformService } from './detailsform.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    // CheckoutComponent
  ],
  declarations: [DetailsformComponent],
  exports: [
  	DetailsformComponent, FormsModule ],
  providers: [DetailsformService]
//   	, FormsModule, ReactiveFormsModule,]
})
export class SharedFormModule {
 }
