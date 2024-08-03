import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import ImageCard from "./ImageCard";

const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center ">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
        <ImageCard
          title="The Beach"
          author="coder29"
          img="https://media.istockphoto.com/id/1031430214/photo/young-woman-kayaking-through-the-backwaters-of-monroe-island.jpg?s=612x612&w=is&k=20&c=fhodSJYun4gS-NHYQcMUauAVE5Z1GYvfKu9eajKq050="
          price={10}
          icon1={
            <FaShoppingCart className="text-2xl  text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl  text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />

        <ImageCard
          title="The Mountain"
          author="coder29"
          img="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=300"
          price={25}
          icon1={
            <FaShoppingCart className="text-2xl  text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl  text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="The City"
          author="coder29"
          img="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          price={30}
          icon1={
            <FaShoppingCart className="text-2xl  text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl  text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="The Fort"
          author="coder29"
          img="https://images.pexels.com/photos/9179927/pexels-photo-9179927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          price={25}
          icon1={
            <FaShoppingCart className="text-2xl  text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl  text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="The Forest"
          author="coder29"
          img="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=600"
          price={25}
          icon1={
            <FaShoppingCart className="text-2xl  text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl  text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
        <ImageCard
          title="The Mountain"
          author="coder29"
          img="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=300"
          price={25}
          icon1={
            <FaShoppingCart className="text-2xl  text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
          icon2={
            <IoIosHeart className="text-2xl  text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300" />
          }
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
