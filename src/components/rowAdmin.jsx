import axios from "axios";

export default function RowAdmin({name,lastname,position,onDelete,id}){
    
    const handleDelete = async () => {
    const isConfirm = confirm("ลบใช่ไหม");
    if (!isConfirm) return;
    
    try {await axios.delete(`https://67eca027aa794fb3222e43e2.mockapi.io/members/${id}`);
        
    onDelete();
     } catch (error){
        console.log(error)
     };
     
    }




    return (
            <tr>
                <td className="border p-2 bg-gray-100 w-56">{name}</td>
                <td className="border p-2 bg-gray-100 w-56">{lastname}</td>
                <td className="border p-2 bg-gray-100 w-56">{position}</td>
                <td className="border p-2 bg-gray-100 w-56"> <button className="text-red-600 text-center w-full hover:scale-125 transition" onClick={handleDelete}>
          delete
        </button></td>
            </tr>   
    )
}