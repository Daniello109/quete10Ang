import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../models/cocktail';
import { CocktailService } from 'src/services/cocktail.service';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit{

   
  cocktails:Cocktail[] = []

 constructor(private serviceCocktail:CocktailService){
  this. cocktails=this.serviceCocktail.cocktails
 }

  ngOnInit(): void {
    this.serviceCocktail.getCocktails();  
  }  
}
