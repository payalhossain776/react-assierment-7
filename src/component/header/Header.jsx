import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <div>
            <section className="flex justify-around items-center lexend-uniquifier mb-9 mt-6 p-6">
                <div>
                    <h1 className="text-4xl text-[#0BE58A]">Recips Calories</h1>
                </div>
                {/* nav */}
                <div className="text-xl flex gap-8">
                    <a href="">Home</a>
                    <a href="">Recipes</a>
                    <a href="">About</a>
                    <a href="">Search</a>
                </div>
                <div className="flex items-center gap-40">
                    <div className="flex items-center ">
                        <input className="border-2 p-4 text-xl text-center
                 border-[#0BE58A] bg-gray-100 w-[220px] h-[20px] rounded-2xl"
                            placeholder="search" />
                        <CiSearch className="ml-[-160px]  text-xl"></CiSearch>
                    </div>
                    <div className="text-4xl text-[#0BE58A]">
                        <FaRegUserCircle></FaRegUserCircle>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;