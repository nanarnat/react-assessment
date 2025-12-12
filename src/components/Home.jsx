import { useState } from "react";
import Normal from "./Normal";

export default function Home() {
    const [view,setView] = useState("Normal");
    return (
        <div>
            {view === "Normal" && <Normal/> }

        </div>
    )
}