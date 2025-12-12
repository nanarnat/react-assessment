import axios from "axios";
import { useState } from "react";

export default function CreateUser({ onUserCreated }) {
   
    const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    position: "",
  });
   
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
   
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://67eca027aa794fb3222e43e2.mockapi.io/members/",formData);


      console.log(formData,response.data);

      setFormData({
        name: "",
        lastname: "",
        position: "",
      });
     
      if (onUserCreated) {
  console.log("Creating user → calling parent refresh");
  onUserCreated();
}



    } catch (error) {
      console.error("Error creating user:", error);
    } 
  };
   
    return (
        <div className="px-20">
            
            <p className="text-2xl font-semibold pl-5">Create User Here</p>
            <form className="px-10 py-5 flex justify-between gap-5"onSubmit={handleSubmit}>
            <input  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white w-auto" name="name" value={formData.name} onChange={handleChange} placeholder="name"></input>
            <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white w-auto" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="lastname"></input>
            <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white w-auto" name="position" value={formData.position} onChange={handleChange} placeholder="position"></input>
            <button  type="submit" className="font-bold bg-blue-400 rounded-4xl w-24 hover:shadow-lg" >Save
            </button>
            </form>
        </div>
    )
}
