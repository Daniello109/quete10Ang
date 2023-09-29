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
    /* el constructor se inicia a la construcción del componente, y no a la iniciación de este, como NgOnInit. Es el cociner, o sea, prepara el plato
    para que puedas comértelo o hacer lo que quieras con él. Su rol es de proveer de lo necesario al componente para poder usarlo */
    constructor(private serviceCocktail:CocktailService){       /* En este caso, injecta el Cocktailservice el la variable serviceCockatail (o como quieras llamarla) para acceder a las porpiedades del servicio*/
    this. cocktails=this.serviceCocktail.cocktails              /* en el mismo constructor, indicas que la array que tienes en el servicio, debe ser almacenada en la array vacía de aquí */
  }

  ngOnInit(): void { 
    
    /* para la quete 10, con los objetos en duro desde el servicio : this.serviceCocktail.getCocktails(); */ /* llamas al servicio y obtienes la función que hay en este para obtener todos los cocktails
    Hay que tener cuidado como y cuando se llaman a los observables, porque dependiendo del orden, realizarán su función en un momento u otro */ 
    this.serviceCocktail.getCocktails().subscribe(cocktailsFromJsonFile => {  /* 4 lanzamos la función que recuperamos del servicio CocktailService, recogica en la propiedad serviceCocktail. Nos suscribimos al flujo del observable mediante el suscribe. Esto sirve para saber cuándo han llegado los datos, y actuar en consecuencia (es una función callback)*/
    this.cocktails = cocktailsFromJsonFile;                                   /* 5 lo que hace en esta función callback, es atribuir el valor recuperado en el objeto, a la propiedad cocktails (this.cocktails). El resto el igual que en la quete 10, lo único que hemos hecho el añadirle el servicio httpsclient a nuestro servicio, y recuperar la información de un fichero, en lugar de la escrita en duro */
    })
  }
}
