import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

import './Recipe.css';

export default function Recipe() {
   const { id } = useParams();
   const url = `http://localhost:3000/recipes/${id}`;
   const { data, isPending, error } = useFetch(url);

   return (
      <div>
         {error && <p className="error">{error}</p>}
         {isPending && <p className="loading">Loading...</p>}
         {data && (
            <div>
               <h2>{data.title}</h2>
               <p>Method : {data.method}</p>
               <p>Cooking Time : {data.cookingTime}</p>
               Ingredients :{' '}
               {data.ingredients.map((ingg) => (
                  <div>{ingg}</div>
               ))}
            </div>
         )}
      </div>
   );
}
