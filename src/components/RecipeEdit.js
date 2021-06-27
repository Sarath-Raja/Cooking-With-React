import React from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';

export default function RecipeEdit({recipe}) {
    return (
        <div className="recipe-edit">
            <div className="recipe-edit-close-container">
                <div className="recipe-edit-close"><b style={{cursor: "pointer"}}>&times;</b></div>
            </div>
            <div className="recipe-edit-grid">
                <label className="recipe-label" htmlFor="name">Name</label>
                <input className="recipe-input" type="text" id="name" value={recipe.name}/>
                <label className="recipe-label" htmlFor="cooktime">Cook Time</label>
                <input className="recipe-input" type="text" id="cooktime" value={recipe.cooktime}/>
                <label className="recipe-label" htmlFor="servings">Servings</label>
                <input className="recipe-input" type="text" id="servings" value={recipe.servings}/>
                <label className="recipe-label" htmlFor="instructions">Instructions</label>
                <textarea className="recipe-input" id="instructions" value={recipe.instructions}>
                </textarea>
            </div>
            <br/>
                <label className="recipe-label">Ingredients</label>
                <div className="recipe-edit-ingredient-grid">
                    <div>Name</div>
                    <div>Amount</div>
                    <div></div>
                    {recipe.ingredients.map((ingredient) => {
                        return <RecipeIngredientEdit key={ingredient.id} {...ingredient}/>
                    })}
                </div>
                <div className="recipe-edit-btn-container">
                    <button className="btn-add-recipe">Add Ingredient</button>
                </div>
        </div>
    )
} 