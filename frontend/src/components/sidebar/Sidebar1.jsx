import {
  LayoutDashboard,
  UserRound,
  BriefcaseBusiness,
  Building2,
  FileUser,
} from "lucide-react";

import SidebarItem from "./SidebarItems";

const menu = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Users", icon: UserRound },
  { label: "Jobs", icon: BriefcaseBusiness },
  { label: "Companies", icon: Building2 },
  { label: "Applications", icon: FileUser },
];

export default function SideBar1({ activePage, setActivePage }) {
  return (
    <aside className="w-64 h-screen bg-white border-r p-5">
      <h2 className="text-2xl font-bold mb-8">JobBoard</h2>

      <div className="space-y-2">
        {menu.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={activePage === item.label}
            onClick={() => setActivePage(item.label)}
          />
        ))}
      </div>
    </aside>
  );
}
