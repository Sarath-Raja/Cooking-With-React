import React from 'react'

export default function RecipeIngredientEdit(props) {
    const {
        ingredient,
        handleIngredientChange,
        handleIngredientDelete
    } = props;

    function handleChange(changes) {
        handleIngredientChange(ingredient.id, {...ingredient, ...changes}) 
    }
    return (
        <>
            <input className="recipe-input" type="text" value={ingredient.name} onChange={(e)=>handleChange({"name": e.target.value})}/>
            <input className="recipe-input" type="text" value={ingredient.amount} onChange={(e)=>handleChange({"amount": e.target.value})}/>
            <button className="btn-delete" style={{fontSize: "2rem"}} onClick={()=>handleIngredientDelete(ingredient.id)}>&times;</button>
        </>
    )
}
