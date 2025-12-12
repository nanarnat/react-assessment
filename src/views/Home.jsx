import { useState } from "react";
import Normal from "../components/Normal";
import User from "../components/User";
import Admin from "../components/Admin";
import ViewToggleButton from "../components/ViewToggleButton";
import UserTable from "../components/userTable";
import AdminTable from "../components/AdminTable";
import CreateUser from "../components/CreateUser";

export default function Home() {
    const [view,setView] = useState("Normal");
    return (
        <div className="bg-amber-100 h-dvh w-full">
            <div>
                {view === "Normal" && <Normal/> }
                {view === "User" && <User/> }
                {view === "Admin" && <Admin/> }
            </div>
            <div className="flex justify-around p-5">  
            <ViewToggleButton onClick={() => {
                setView("User");
                }}>
                    User Home View
            </ViewToggleButton>

            <ViewToggleButton onClick={() => {
                setView("Admin");
                }}>
                    Admin Home View
            </ViewToggleButton>
            </div>
            
            {view === "User" && <UserTable/> }
            {view === "Admin" && <CreateUser/>}
            {view === "Admin" && <AdminTable/> }

        </div>
    )
}