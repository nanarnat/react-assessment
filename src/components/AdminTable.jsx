import { useEffect, useState } from "react";
import axios from "axios";
import RowTable from "./rowTable";
import RowAdmin from "./rowAdmin";
import CreateUser from "./CreateUser";

export default function AdminTable() {
    
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
          <CreateUser onUserCreated={fetchData} />
            <table className="border">
                <thead>
                <tr>    
                <th scope="col" className="border p-2 bg-gray-400 w-56">Name</th>
                <th scope="col" className="border p-2 bg-gray-400 w-56">Last Name</th>
                <th scope="col" className="border p-2 bg-gray-400 w-56">Position</th>
                <th scope="col" className="border p-2 bg-gray-400 w-56">Action</th>
                </tr>
                </thead>
                <tbody>
    
                        {data && Array.isArray(data) && data.map((e) => (<RowAdmin key={e.id} {...e} onDelete={fetchData} onUserCreated={fetchData}/>))}
                   
                </tbody>
            </table>
        </div>
    )
}
