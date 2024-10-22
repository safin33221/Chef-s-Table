/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

const Recipe = ({ recipe }) => {
    const { image, recipe_name, description, ingredients, preparing_time, calories } = recipe;
    return (
        <div>
            <div class="card bg-base-100 border-2  shadow-xl">
                <figure>
                    <img className="h-[200px] w-11/12 rounded-3xl py-4"
                        src={image}
                        alt="" />
                </figure>
                <div class=" px-10">
                    <h2 class="card-title">{recipe_name}</h2>
                    <p>{ }description</p>
                    <hr className=" my-4" />
                    <div class="">
                        {
                            ingredients.map(item => <li key={item.recipe_id}>{item}</li>)
                        }
                    </div>
                    <hr className="my-4" />

                    <div className="flex gap-10">
                        <p><i class="fa-regular fa-clock"></i> {preparing_time}</p>
                        <p><i class="fa fa-fire-flame-simple"></i> {calories}</p>
                    </div>
                </div>
                <div>
                    <button className="btn outline-none border-none bg-[#0BE58A] rounded-3xl text-black font-bold mx-3 my-4">Want to Cook</button>

                </div>
            </div>
        </div>
    );
};

export default Recipe;