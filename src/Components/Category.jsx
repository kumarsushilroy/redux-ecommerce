import React from "react";
import { UseFilterContext } from "../FilterContext/Filtercontex";
import { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../Storage/CartSlice";

import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

function Category() {
  const {
    filtered_Data,
    sorting,
    filters: { text, category },
    updateFilter,
    all_Products,
  } = UseFilterContext();

  const CategoryValue = (data, property) => {
    let newVal = data.map((item, i) => {
      return item[property];
    });

    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoryData = CategoryValue(all_Products, "category");
  const companyfilter = CategoryValue(all_Products, "company");

  const [bars, setbars] = useState(false);

  const settingBars = () => {
    setbars(!bars);
  };

  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(add(item));
  };

  return (
    <div className="w-full">
      {/* <div className="hidden md:block">
        <Navbar />
      </div> */}
      <div className="flex m-2">
        <div className="hidden md:block ">
          {/* SEARCH FILTER STARTS.......... */}
          <div className="mt-3">
            <h1 className="px-2 font-bold">Search Products</h1>
            <div className="mt-1 p-2">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  className="border p-2 outline-none"
                  value={text}
                  type="text"
                  name="text"
                  onChange={updateFilter}
                  placeholder="Search...."
                />
              </form>

              <div className="mt-10 flex flex-col gap-2  items-start">
                <h1 className="font-bold">Category</h1>
                {categoryData.map((item, i) => {
                  return (
                    <button
                    className="hover:underline"
                      key={i}
                      type="button"
                      name="category"
                      value={item}
                      onClick={updateFilter}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* COMPANY VICE FILTERATION............ .....*/}
            <div className="mt-10">
              <h1 className="font-bold px-2 mb-2">Company</h1>
              <select
                name="company"
                className="border-2 ml-2 p-1 outline-none"
                id="comp"
                onClick={updateFilter}
              >
                {companyfilter.map((item, i) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>

            <div className="mt-10">
              <form>
                <label className="font-bold ml-3 block mb-2 " htmlFor="sort">
                  sort by price
                </label>
                <select id="sort" className="border-2 p-1 outline-none ml-2" onClick={sorting}>
                  <option value="high-low">High-Low</option>
                  <option value="low-high">Low-High</option>
                  <option value="lowestprice">Price(Lowest)</option>
                  <option value="highestprice">Price(Highest)</option>
                </select>
              </form>
            </div>
          </div>
        </div>

        <div onClick={settingBars} className="md:hidden flex p-3">
          {!bars ? <AiOutlineBars size={20} /> : <AiOutlineClose size={20} />}
        </div>

        <div
          className={
            bars
              ? "fixed bg-gray-400  p-3 top-0 mt-[45%] left-0 duration-500"
              : " fixed top-[-100%]"
          }
        >
          {/* SEARCH FILTER STARTS.......... */}
          <div className="w-[200px] text-sm ">
            <h1 className="px-2 font-bold">Search Products</h1>
            <div className="mt-1 p-2 ">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  className="border p-1"
                  value={text}
                  type="text"
                  name="text"
                  onChange={updateFilter}
                  placeholder="Search...."
                />
              </form>

              <div className="mt-10 flex flex-col gap-2  items-start">
                <h1 className="font-bold">Category</h1>
                {categoryData.map((item, i) => {
                  return (
                    <button
                    
                      key={i}
                      type="button"
                      name="category"
                      value={item}
                      onClick={updateFilter}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* COMPANY VICE FILTERATION............ .....*/}
            <div className="mt-10">
              <h1 className="font-bold px-2 mb-2">Company</h1>
              <select
                name="company"
                className="border-2 ml-2"
                id="comp"
                onClick={updateFilter}
              >
                {companyfilter.map((item, i) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>

            <div className="mt-10">
              <form>
                <label className="font-bold ml-3 block mb-2 " htmlFor="sort">
                  sort by price
                </label>
                <select id="sort" className="border-2 ml-2" onClick={sorting}>
                  <option value="high-low">High-Low</option>
                  <option value="low-high">Low-High</option>
                  <option value="lowestprice">Price(Lowest)</option>
                  <option value="highestprice">Price(Highest)</option>
                </select>
              </form>
            </div>
          </div>
        </div>


        <div>
          <h1 className="text-center font-bold py-2 pb-3">
            {filtered_Data.length} Products Available
          </h1>
          <div className="grid sm:grid-cols-4 grid-cols-2  gap-4">
            {filtered_Data.map((item, i) => {
              return (
                <div className="border p-3 hover:transform:scale(1) overflow-hidden">
                  <img
                    className="h-[200px] w-full object-cover"
                    src={item.image}
                    alt=""
                  />

                  <div className=" items-center flex-col sm:flex  gap-2 p-2 sm:justify-between">
                    <h1>{item.name}</h1>
                    <h1>${item.price}</h1>
                  </div>

                  <div className="flex ">
                    <button
                      onClick={() => addItem(item)}
                      className="border w-full rounded px-2 text-black py-1  bg-yellow-400 hover:opacity-80"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* category filteration........... */}
      </div>
    </div>
  );
}

export default Category;
