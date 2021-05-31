import { Component, Injectable, OnInit } from '@angular/core';
import { produits } from '../model/produit.model';
import {observable} from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
