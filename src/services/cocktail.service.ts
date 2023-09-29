import { Injectable } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  /* Un servicio se crea para reutilizar una parte de código en varios componentes */

  cocktails:Cocktail[] = []      /* Una array vacía, de tipo null, porque no tiene valor. Si fuese [""], sería undefined, porque tiene un valor vacío. Aquí viene la información del servicio, como si fuese una base de datos que tuviésemos que inyectarle a varios componentes : una array de objetos,que está en cocktailService, de tipo Cocktail, que es la de models/cocktails */
  
   /*para la quete 10, OBJETOS EN DURO :
    new Cocktail ("Mojito", 12, "https://cdn.chefclub.tools/uploads/recipes/cover-thumbnail/e37529e8-3f1a-4661-8fe9-84f32df4b89c_Etoe51p.jpg"),
    new Cocktail ("sex on the beach", 10, "https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-sex-on-the-beach-2.jpg")  */
  

  constructor(private cocktailRequest: HttpClient){
  }
    
      /* para la quete 10, con los objetos en duro desde el servicio : {return this.cocktails;} , esto devuelve la array entera */
  getCocktails(): Observable<Cocktail[]> {                                        /* creación del observable */
    return this.cocktailRequest.get<Cocktail[]>("assets/cocktails.json");      /* petición al servidor para obtener la información json */
      /* 1 se importa el módulo HttpClient en app.modules.ts y se importa aquí. Una vez que lo tengamos, se crea una instancia del servicio httpClient en el constructor  
      2 Este servicio realizará una llamada al servidor local y este le responderá enviándole el contenido del fichero de la dirección indicada aquí(assets/cocktails.json).

      3 Una vez realizado, la respuesta del servidor será un objeto de tipo genérico. Para evitar que hay problema de asincronismo (ya que la respuesta no es inmediata) se utiliza un objeto observable (asyncrone) para transportar la información.
      A realizar esta petición, obtendremos un Observable de tipo Cocktails[] 
        
      (sigue en el cocktail-list)*/
  }
}




 

