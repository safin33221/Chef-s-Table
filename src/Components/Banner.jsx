

const Banner = () => {
    return (
        <div>
            <div className="bg-no-repeat bg-cover w-full rounded-lg h-[490px]   my-auto"
                style={{
                    backgroundImage: 'url(https://i.ibb.co/CQb80rQ/banner.png)'
                }}>

                <div className="text-center  w-1/2 mx-auto pt-36 space-y-3">

                    <h1 className="text-4xl font-extrabold text-white ">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="text-white *:">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className="">
                    <button className="btn outline-none border-none bg-[#0BE58A] rounded-3xl text-black font-bold mx-3">Explore Now</button>
                    <button className="btn btn-outline font-bold rounded-3xl text-white">Our Feedback</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;