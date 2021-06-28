import React, {useState, useEffect} from 'react';
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import uuidv4 from 'uuid/v4';
import "../css/app.css"

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes"

function App() {
	const [recipes, setRecipes] = useState(sampleRecipes);
	const [selectedRecipeId, setSelectedRecipeId] = useState();
	const selectedReciepe = recipes.find((recipe) => recipe.id === selectedRecipeId)

	useEffect(()=>{
		const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
		if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
	},[])
	
	useEffect(()=>{
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
	},[recipes]);

	function handleAddRecipe() {
		const newRecipe = {
			id: uuidv4(),
			name: "",
			servings: 1,
			cooktime: "",
			instructions: "",
			ingredients: [
				{
					id: uuidv4(),
					name: '',
					amount: ''
				}
			]
		}
		setSelectedRecipeId(newRecipe.id)
		setRecipes([...recipes, newRecipe])
	}

	function handleDeleteRecipe(id) {
		if(selectedRecipeId !== null && selectedRecipeId === id)
			setSelectedRecipeId(undefined)
			
		const filteredRecipes = recipes.filter(recipe => recipe.id !== id);
		setRecipes(filteredRecipes)
	}

	function handleSelectedRecipe(id) {
		setSelectedRecipeId(id)
	}

	function handleRecipeChange(id, newRecipe) {
		const newRecipes = [...recipes];
		const recipeIndex = newRecipes.findIndex(recipe => recipe.id === id)
		newRecipes[recipeIndex] = newRecipe;
		setRecipes(newRecipes)
	}

	const recipeContextValue = {
		handleAddRecipe,
		handleDeleteRecipe,
		handleSelectedRecipe,
		handleRecipeChange
	}

	return (
		<RecipeContext.Provider value={recipeContextValue}>
			<RecipeList recipes={recipes}/>
			{selectedReciepe && <RecipeEdit recipe={selectedReciepe}/ >}
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
		name: "Plain Pork",
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
