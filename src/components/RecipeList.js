import { Link } from 'react-router-dom';
import './RecipeList.css';

export default function RecipeList({ recipes }) {
   return (
      <div className="recipe-list">
         {recipes.map((recipe) => {
            return (
               <div className="card" key={recipe.id}>
                  <h2>{recipe.title}</h2>
                  <p>{recipe.cookingTime} To make</p>
                  <div>{recipe.method.substring(0, 100)}...</div>
                  <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
               </div>
            );
         })}
      </div>
   );
}
