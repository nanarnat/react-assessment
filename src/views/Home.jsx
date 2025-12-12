import { useState } from "react";
import Normal from "../components/Normal";
import User from "../components/User";
import Admin from "../components/Admin";
import ViewToggleButton from "../components/ViewToggleButton";

export default function Home() {
    const [view,setView] = useState("Normal");
    return (
        <div>
            <div>
                {view === "Normal" && <Normal/> }
                {view === "User" && <User/> }
                {view === "Admin" && <Admin/> }
            </div>

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
    )
}