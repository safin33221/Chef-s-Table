/* eslint-disable no-unused-vars */
import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";


const App = () => {
  const [recAddToSber, setRecAddToSber] = useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [caloris, setCaloris] = useState(0)

  const handleAddToSideBer = rescipe => {


    const isExit = recAddToSber.find(
      item => item.recipe_id === rescipe.recipe_id
    )

    if (!isExit) {
      setRecAddToSber([...recAddToSber, rescipe])

    } else {
      alert('already exit')

    }

  }


  const handlePrepared = recipes => {
    const removeRecipe = recAddToSber.find(recipe => recipe.recipe_id === recipes.recipe_id)

    const remaning = recAddToSber.filter(recipe => recipe.recipe_id !== recipes.recipe_id)
    setRecAddToSber(remaning)
    setPreparedRecipe([...preparedRecipe, removeRecipe])

    setTotalTime(totalTime + recipes.preparing_time)
    setCaloris(caloris + recipes.calories)


  }

  return (
    <div className="w-11/12 mx-auto">
      {/* header */}
      <Header></Header>
      {/* banner seciton */}
      <Banner></Banner>

      {/* out recipes */}
      <OurRecipes></OurRecipes>
      <section className="flex flex-col-reverse lg:flex-row gap-4 ">
        <Recipes
          handleAddToSideBer={handleAddToSideBer}
        ></Recipes>
        <Sidebar
          recAddToSber={recAddToSber}
          handlePrepared={handlePrepared}
          preparedRecipe={preparedRecipe}
          totalTime={totalTime}
          caloris={caloris}
        ></Sidebar>
      </section>

    </div>
  );
};

export default App;