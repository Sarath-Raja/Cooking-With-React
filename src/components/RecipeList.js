import React from 'react';
import Recipe from './Recipe';

export default function RecipeList(props) {
    const {
        recipes,
        handleAddRecipe,
        handleDeleteRecipe,
    } = props;
    return (
        <div className="recipe-list">
            {
                recipes.map(recipe => {
                    return <Recipe key={recipe.id} {...recipe} handleDeleteRecipe={handleDeleteRecipe}/>
                })
            }
            <div className="div-add-recipe">
                <button className="btn-add-recipe" onClick={handleAddRecipe}>Add Recipe</button>
            </div>
        </div>
    )
}
