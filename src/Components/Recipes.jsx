/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";


const Recipes = ({handleAddToSideBer}) => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('rachepis.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className="w-2/3  grid grid-cols-1 lg:grid-cols-2 gap-4 object-cover ">
            {
                recipes.map(recipe => <Recipe
                    
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleAddToSideBer={handleAddToSideBer}
                    ></Recipe>)
            }


        </div>



    );
};

export default Recipes;