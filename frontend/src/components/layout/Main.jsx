import Sidebar from "../sidebar/Sidebar1";
import Topbar from "../topbar/Topbar";
import MainContent from "../mainComponent/main";
import { useState } from "react";

export default function Main() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="flex">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="flex flex-col flex-1 h-screen">
        <Topbar />

        <MainContent activePage={activePage} />
      </div>
    </div>
  );
}
