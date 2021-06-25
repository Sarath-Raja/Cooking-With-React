import React, {useContext} from 'react';
import Recipe from './Recipe';
import { RecipeContext } from './App';

export default function RecipeList(props) {
    const {
        recipes
    } = props;

    const { handleAddRecipe } = useContext(RecipeContext);
    return (
        <div className="recipe-list">
            {
                recipes.map(recipe => {
                    return <Recipe key={recipe.id} {...recipe}/>
                })
            }
            <div className="div-add-recipe">
                <button className="btn-add-recipe" onClick={handleAddRecipe}>Add Recipe</button>
            </div>
        </div>
    )
}
