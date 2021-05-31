import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit.model';
import { ProduitService } from '../services/produit/produit.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

produits? : Observable<Produit[]>;



  constructor(private produitService : ProduitService, private router : Router) { 
  }

  
  ngOnInit(): void {
    this.relaoddata();
  }

  relaoddata(){
    this.produits = this.produitService.getAllproducts();
  }


}
