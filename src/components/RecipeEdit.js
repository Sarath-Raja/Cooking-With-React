import React, {useContext} from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import {RecipeContext} from './App';
import uuidv4 from 'uuid/v4';

export default function RecipeEdit({recipe}) {
    const {
        handleRecipeChange,
        handleSelectedRecipe
    } = useContext(RecipeContext)

    function handleChange(changes) {
        handleRecipeChange(recipe.id, {...recipe, ...changes});
    }

    function handleIngredientChange(id, newIngredient) {
		const newIngredients = [...recipe.ingredients];
        const ingredientIndex = newIngredients.findIndex(i => i.id === id)
		newIngredients[ingredientIndex] = newIngredient;
		handleChange({ingredients: newIngredients})
    }

    function handleIngredientAdd() {
        const newIngredient = {
            id: uuidv4(),
            name: "",
            amount: ""
        }
        handleChange({ingredients: [...recipe.ingredients, newIngredient]})
    }

    function handleIngredientDelete(id) {
        handleChange({ingredients: recipe.ingredients.filter((i)=> i.id !== id)})
    }

    return (
        <div className="recipe-edit">
            <div className="recipe-edit-close-container">
                <button className="recipe-edit-close"
                    onClick={()=>handleSelectedRecipe(undefined)}>
                &times;
                </button>
            </div>
            <div className="recipe-edit-grid">
                <label className="recipe-label" htmlFor="name">Name</label>
                <input className="recipe-input" type="text" id="name" value={recipe.name} 
                    onChange={(e)=>handleChange({"name" : e.target.value})}
                />
                <label className="recipe-label" htmlFor="cooktime">Cook Time</label>
                <input className="recipe-input" type="text" id="cooktime" value={recipe.cooktime}
                    onChange={(e)=>handleChange({"cooktime" : e.target.value})}
                />
                <label className="recipe-label" htmlFor="servings">Servings</label>
                <input className="recipe-input" type="text" id="servings" value={recipe.servings}
                    onChange={(e)=>handleChange({"servings" : parseInt(e.target.value)})}
                />
                <label className="recipe-label" htmlFor="instructions">Instructions</label>
                <textarea className="recipe-input" id="instructions" value={recipe.instructions}
                    onChange={(e)=>handleChange({"instructions" : e.target.value})}
                />
            </div>
            <br/>
                <label className="recipe-label">Ingredients</label>
                <div className="recipe-edit-ingredient-grid">
                    <div>Name</div>
                    <div>Amount</div>
                    <div></div>
                    {recipe.ingredients.map((ingredient) => {
                        return <RecipeIngredientEdit 
                                    key={ingredient.id} 
                                    ingredient = {ingredient} 
                                    handleIngredientChange={handleIngredientChange}
                                    handleIngredientDelete={handleIngredientDelete}
                                />
                    })}
                </div>
                <div className="recipe-edit-btn-container">
                    <button className="btn-add-recipe"
                        onClick={()=>handleIngredientAdd()}>
                        Add Ingredient
                    </button>
                </div>
        </div>
    )
} 