import { Injectable } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  /* Un servicio se crea para reutilizar una parte de código en varios componentes */

  cocktails:Cocktail[] = [ /* esta es la información del servicio, como si fuese una base de datos que tuviésemos que inyectarle a varios componentes : una array de objetos de tipo Cocktail, que está en el modelo */
  
    new Cocktail ("Mojito", 12, "https://cdn.chefclub.tools/uploads/recipes/cover-thumbnail/e37529e8-3f1a-4661-8fe9-84f32df4b89c_Etoe51p.jpg"),
    new Cocktail ("sex on the beach", 10, "https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-sex-on-the-beach-2.jpg") 
  ]
  
    getCocktails(){
      return this.cocktails; /* esto devuelve la array entera */
     
    }



}
 

