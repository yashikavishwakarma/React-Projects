import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "India", // Fixed typo
    address: "",
    city: "",
    state: "",
    zip: "",
    comment: false,
    candidates: false,
    offers: false,
    push: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function saveHandler(event) {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <form onSubmit={saveHandler} className="bg-white p-6 shadow-md rounded-md w-full max-w-md">
        {/* First Name */}
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          placeholder="Pranay"
          onChange={changeHandler}
          name="firstname"
          value={formData.firstname}
          id="firstname"
          className="border p-2 w-full mb-3 rounded-md"
        />

        {/* Last Name */}
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Gupta"
          onChange={changeHandler}
          name="lastname"
          value={formData.lastname}
          id="lastname"
          className="border p-2 w-full mb-3 rounded-md"
        />

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="pgupta@duck.com"
          onChange={changeHandler}
          name="email"
          value={formData.email}
          id="email"
          className="border p-2 w-full mb-3 rounded-md"
        />

        {/* Country */}
        <label htmlFor="country">Country</label>
        <select
          onChange={changeHandler}
          value={formData.country} // Fixed typo
          name="country"
          id="country"
          className="border p-2 w-full mb-3 rounded-md"
        >
          <option value="India">India</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option> {/* Fixed "Ameraica" typo */}
          <option value="France">France</option>
        </select>

        {/* Address */}
        <label htmlFor="address">Street Address</label>
        <input
          type="text"
          placeholder="1234 Main St"
          onChange={changeHandler}
          name="address"
          value={formData.address}
          id="address"
          className="border p-2 w-full mb-3 rounded-md"
        />

        {/* City */}
        <label htmlFor="city">City</label>
        <input
          type="text"
          placeholder="Asansol"
          onChange={changeHandler}
          name="city"
          value={formData.city}
          id="city"
          className="border p-2 w-full mb-3 rounded-md"
        />

        {/* State */}
        <label htmlFor="state">State / Province</label>
        <input
          type="text"
          placeholder="West Bengal"
          onChange={changeHandler}
          name="state"
          value={formData.state}
          id="state"
          className="border p-2 w-full mb-3 rounded-md"
        />

        {/* ZIP Code */}
        <label htmlFor="zip">ZIP / Postal Code</label>
        <input
          type="text"
          placeholder="713301"
          onChange={changeHandler}
          name="zip"
          value={formData.zip}
          id="zip"
          className="border p-2 w-full mb-3 rounded-md"
        />

        {/* Email Preferences */}
        <fieldset className="border p-3 rounded-md mb-4">
          <legend className="font-semibold">By Email</legend>

          <div className="flex items-center gap-2">
            <input type="checkbox" onChange={changeHandler} name="comment" checked={formData.comment} id="comment" />
            <label htmlFor="comment">Comments</label>
          </div>
          <p className="text-sm text-gray-600">Get notified when someone comments on a post.</p>

          <div className="flex items-center gap-2">
            <input type="checkbox" onChange={changeHandler} name="candidates" checked={formData.candidates} id="candidates" />
            <label htmlFor="candidates">Candidates</label>
          </div>
          <p className="text-sm text-gray-600">Get notified when a candidate applies for a job.</p>

          <div className="flex items-center gap-2">
            <input type="checkbox" onChange={changeHandler} name="offers" checked={formData.offers} id="offers" />
            <label htmlFor="offers">Offers</label>
          </div>
          <p className="text-sm text-gray-600">Get notified when a candidate accepts or rejects an offer.</p>
        </fieldset>

        {/* Push Notifications */}
        <fieldset className="border p-3 rounded-md mb-4">
          <legend className="font-semibold">Push Notifications</legend>
          <p className="text-sm text-gray-600">These are delivered via SMS to your mobile phone.</p>

          <div className="flex items-center gap-2">
            <input type="radio" onChange={changeHandler} name="push" checked={formData.push === "Everything"} value="Everything" id="Everything" />
            <label htmlFor="Everything">Everything</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="radio" onChange={changeHandler} name="push" checked={formData.push === "SameAsMail"} value="SameAsMail" id="SameAsMail" />
            <label htmlFor="SameAsMail">Same As Mail</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="radio" onChange={changeHandler} name="push" checked={formData.push === "NoPush"} value="NoPush" id="NoPush" />
            <label htmlFor="NoPush">No Push Notifications</label>
          </div>
        </fieldset>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-blue-700">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
