import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading="what's new?"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <fieldset className="fieldset  my-2">
            <legend className="fieldset-legend">Recipe Name</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
            />
          </fieldset>

          <div className="flex gap-6">
            {/* category */}
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Category</legend>
              <select
                {...register("category", { required: true })}
                defaultValue="Select a Category"
                className="select w-full"
              >
                <option disabled={true}>Select a Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </fieldset>
            {/* price */}
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Price</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </fieldset>
          </div>

          {/* recipe details */}
          <fieldset className="fieldset  my-2">
            <legend className="fieldset-legend">Recipe Details</legend>
            <textarea
              className="textarea h-24"
              {...register("recipe", { required: true })}
              placeholder="Recipe Details"
            ></textarea>
          </fieldset>

          {/* image */}
          <div className="mt-6 mb-8">
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-ghost"
            />
          </div>

          <button className="btn">
            Add Items <FaUtensils />{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
