import React, {useState} from 'react';
import RecipeList from "./RecipeList";
import uuidv4 from 'uuid/v4';
import "../css/app.css"

export const RecipeContext = React.createContext()

function App() {
	const [recipes, setRecipes] = useState(sampleRecipes)
	function handleAddRecipe() {
		const newRecipe = {
			id: uuidv4(),
			name: "Banana Shake",
			servings: 1,
			cooktime: "0.5",
			instructions: "1. Put suger into cut bananas\n2. Blend it",
			ingredients: [
				{
					id: uuidv4(),
					name: 'sugar',
					amount: '2 tbs'
				}
			]
		}
		setRecipes([...recipes, newRecipe])
	}

	function handleDeleteRecipe(id) {
		const filteredRecipes = recipes.filter(recipe => recipe.id !== id);
		setRecipes(filteredRecipes)
	}

	const recipeContextValue = {
		handleAddRecipe,
		handleDeleteRecipe
	}

	return (
		<RecipeContext.Provider value={recipeContextValue}>
			<RecipeList recipes={recipes}/>
		</RecipeContext.Provider>
	)
}

const sampleRecipes = [
	{
		id: 1,
		name: "Plain Chicken",
		servings: 2,
		cooktime: "1.34",
		instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
		ingredients: [
			{
				id: 1,
				name: 'chicken',
				amount: '2 kgs'
			},
			{
				id: 2,
				name: 'salt',
				amount: '1 Tbs'
			}
		]
	},
	{
		id: 2,
		name: "Plain pork",
		servings: 3,
		cooktime: "3.33",
		instructions: "1. Put spices on pork\n2. Put pork in oven\n3. Eat pork",
		ingredients: [
			{
				id: 1,
				name: 'pork',
				amount: '3 kgs'
			},
			{
				id: 2,
				name: 'peprika',
				amount: '5 Tbs'
			}
		]
	}
]

export default App;
