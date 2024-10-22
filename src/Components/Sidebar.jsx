/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */


const Sidebar = ({ recAddToSber,handlePrepared,preparedRecipe,totalTime,caloris }) => {
    return (
        <div className="w-1/3 border-2 h-fit">
            <div className="text-center py-3 text-2xl font-bold">
                <h1> Want to cook: {recAddToSber.length}</h1>

            </div>
            <hr />
            <div class="overflow-x-auto">
                <table class="table">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className="px-0">
                            <th>No.</th>
                            <th>Name</th>
                            <th>Times</th>
                            <th> Caloris</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            recAddToSber.map((recipe, idx) =>
                                <tr className="hover px-0" key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time} min</td>
                                    <td>{recipe.calories} calories</td>
                                    <td><button
                                        onClick={()=>handlePrepared(recipe)}
                                        className="btn btn-sm outline-none border-none bg-[#0BE58A] rounded-3xl text-black font-normal my-4"
                                        
                                    >Preparing</button></td>

                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

            <div className="text-center py-3 text-2xl font-bold">
                <h1> Currently cooking: {preparedRecipe.length}</h1>

            </div>
            <hr />

            <div class="overflow-x-auto">
                <table class="table">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className="px-0">
                            <th>No.</th>
                            <th>Name</th>
                            <th>Times</th>
                            <th> Caloris</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            preparedRecipe.map((recipe, idx) =>
                                <tr className="hover px-0" key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time} min</td>
                                    <td>{recipe.calories} calories</td>
                                    

                                </tr>
                            )
                        }
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Total Preparing Time:{totalTime} min</td>
                                    <td>Total calories:{caloris} calories</td>
                                    

                                </tr>


                    </tbody>
                </table>
            </div>


            
        </div>
    );
};

export default Sidebar;