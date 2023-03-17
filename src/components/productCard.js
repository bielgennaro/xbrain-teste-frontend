import React from "react";
import imageData from "./imageData";
import plus from "../images/baseline-add-24px.svg";
import less from "../images/baseline-remove-24px.svg";
import { useDispatch } from "react-redux";
import { increment, decrement } from '../redux/counterSlice'
export default function ProductCard() {
  const dipatch = useDispatch();

  const add = () => {
    dipatch(increment());
  }
  const remove = () => {
    dipatch(decrement());
  }

  return (
    <>

      <div className="grid grid-cols-4 gap-[4rem] w-[65rem] ml-[16rem]">
        {imageData.map((image, index) => (
          <div key={index} className="relative hover:shadow-2xl rounded-xl cursor-pointer ease-in-out transition">
            <img src={image.src} title={image.title} alt={image.alt} />
            <div className="hover:-translate-y-10 py-6 hover:bg-white hover:bg-opacity-30">
              <p className="text-sm text-gray-700 mt-3">{image.text}</p>
              <p className="font-bold text-slate-500 mb-1.5 mt-1.5">{image.price}</p>
              <p className="text-xs text-gray-400 mt-1.5">{image.discount}</p>
              <p className="text-xs text-gray-400">{image.discount2}</p>

              <img onChange={add} id="add" src={plus} alt="addItem" class="opacity-50 mt-4 inline absolute left-[10.5rem] top-[8.4rem] bg-gray-300 rounded-full -z-10" />
              <img onChange={remove} id="remove" src={less} alt="removeItem" class="opacity-50 mt-4 inline absolute right-[11rem] top-[8.4rem] bg-gray-300 rounded-full -z-10" />
            </div>

          </div>
        ))}
      </div>
    </>
  );
}



