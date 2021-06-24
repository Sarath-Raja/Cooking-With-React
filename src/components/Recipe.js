import React from 'react'
import IngredientList from './IngredientList'

export default function Recipe(props) {
    const {
        id,
        name,
        servings,
        cooktime,
        instructions,
        ingredients,
        handleDeleteRecipe
    } = props;

    return (
        <>
            <div className="recipe-header">
                <h2> {name} </h2>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete" onClick={()=>{handleDeleteRecipe(id)}}>Delete</button>
            </div>
            <div>
                <span>Servings :</span>
                <span>{servings}</span>
            </div>
            <div>
                <span>Cook Time :</span>
                <span>{cooktime}</span>
            </div>
            <div>
                <span>Instructions :</span>
                <div className="indent recipe-instructions">
                    {instructions}
                </div>
            </div>
            <div>
                <span>Ingredients :</span>
                <div className="indent">
                    <IngredientList ingredients={ingredients}/>
                </div>
            </div>
        </>
    )
}
