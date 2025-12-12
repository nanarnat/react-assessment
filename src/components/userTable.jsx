import { useEffect, useState } from "react";
import axios from "axios";
import RowTable from "./rowTable";

export default function UserTable() {
    
    const [data, setData] = useState([]);
   
    const fetchData = async () => {
    
    try {
      const data = await axios.get("https://67eca027aa794fb3222e43e2.mockapi.io/members");
      setData(data.data);
  }catch (error) {
    console.log(error);
  }
  };


     useEffect(() => {
    fetchData();
  }, []);

    return (
        <div className="flex-col justify-items-center p-7">
            <table className="border">
                <thead>
                <tr>    
                <th scope="col" className="border p-2 bg-gray-400 w-56">Name</th>
                <th scope="col" className="border p-2 bg-gray-400 w-56">Last Name</th>
                <th scope="col" className="border p-2 bg-gray-400 w-56">Position</th>
                </tr>
                </thead>
                <tbody>
    
                        {data && Array.isArray(data) && data.map((e) => (<RowTable key={e.id} {...e} />))}
                   
                </tbody>
            </table>
        </div>
    )
}
