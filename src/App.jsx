import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";


const App = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* header */}
      <Header></Header>
      {/* banner seciton */}
      <Banner></Banner>

      {/* out recipes */}
      <OurRecipes></OurRecipes>
      <section className="flex gap-4">
        <Recipes></Recipes>
        <Sidebar></Sidebar>
      </section>

    </div>
  );
};

export default App;