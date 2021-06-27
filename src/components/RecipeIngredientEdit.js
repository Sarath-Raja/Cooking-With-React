import React from 'react'

export default function RecipeIngredientEdit(props) {
    const {
        name,
        amount
    } = props;
    return (
        <>
            <input className="recipe-input" type="text" value={name}/>
            <input className="recipe-input" type="text" value={amount}/>
            <button className="btn-delete" style={{fontSize: "2rem"}}>&times;</button>
        </>
    )
}
