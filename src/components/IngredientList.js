import React from 'react'
import Ingredient from './Ingredient'


export default function IngredientList({ ingredients }) {
    const elements =  ingredients.map((ingredient) => {
        return <Ingredient key={ingredient.id} {...ingredient}/>
    })
    return (
        <div className="recipe-ingredients">
            {elements}
        </div>
    )
}
