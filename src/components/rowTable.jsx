export default function RowTable({name,lastname,position}){
    return (
            <tr>
                <td className="border p-2 bg-gray-100 w-56">{name}</td>
                <td className="border p-2 bg-gray-100 w-56">{lastname}</td>
                <td className="border p-2 bg-gray-100 w-56">{position}</td>
            </tr>   
    )
}