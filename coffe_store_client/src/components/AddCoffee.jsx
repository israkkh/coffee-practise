import React from "react";
import { NavLink } from "react-router-dom";

const AddCoffee = () => {
  return (
    
    <div className=' bg-[#F4F3F0] p-24 '>
      <div className="bg-[#F4F3F0] min-h-screen p-10 md:p-24">
      {/* Back to Home Link */}
      <div className="max-w-5xl mx-auto mb-8">
        <NavLink to='/'><button className="text-[#374151] flex items-center gap-2 text-xl font-bold hover:underline">
          <span>←</span> Back to home
        </button>
        </NavLink>
      </div>

      {/* Main Form Card */}
      <div className="bg-[#F4F3F0] rounded-md p-8 md:p-20 max-w-5xl mx-auto border border-gray-100 shadow-sm">
        {/* Header Text */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#374151] mb-6 shadow-sm inline-block">Add New Coffee</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            It is a long established fact that a reader will be distracted by the readable content 
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
            more-or-less normal distribution of letters, as opposed to using Content here.
          </p>
        </div>

        {/* Form Grid */}
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-lg">Name</span>
              </label>
              <input type="text" Name="name" placeholder="Enter coffee name" className="input input-bordered w-full bg-white" />
            </div>

            {/* Chef Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-lg">Chef</span>
              </label>
              <input type="text" Name="chef" placeholder="Enter coffee chef" className="input input-bordered w-full bg-white" />
            </div>

            {/* Supplier Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-lg">Supplier</span>
              </label>
              <input type="text" Name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full bg-white" />
            </div>

            {/* Taste Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-lg">Taste</span>
              </label>
              <input type="text" Name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full bg-white" />
            </div>

            {/* Category Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-lg">Category</span>
              </label>
              <input type="text" Name="category" placeholder="Enter coffee category" className="input input-bordered w-full bg-white" />
            </div>

            {/* Details Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-lg">Details</span>
              </label>
              <input type="text" Name="details" placeholder="Enter coffee details" className="input input-bordered w-full bg-white" />
            </div>
          </div>

          {/* Full Width Photo Input */}
          <div className="form-control w-full mb-8">
            <label className="label">
              <span className="label-text font-semibold text-lg">Photo</span>
            </label>
            <input type="text" Name="photo" placeholder="Enter photo URL" className="input input-bordered w-full bg-white" />
          </div>

          {/* Submit Button */}
          <button 
            type="button" 
            className="btn btn-block bg-[#D2B48C] hover:bg-[#b89a74] border-2 border-[#331A15] text-[#331A15] text-xl capitalize"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AddCoffee;
