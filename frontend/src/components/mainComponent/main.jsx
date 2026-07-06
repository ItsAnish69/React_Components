import Dashboard from "./Dashboard";
import User from "./User";
import Job from "./Job";
import Company from "./Company";
import Application from "./Application";

export default function MainContent({ activePage }) {
  if (activePage === "Dashboard") {
    return <Dashboard activePage={activePage} />;
  }

  if (activePage === "Users") {
    return <User activePage={activePage} />;
  }

  if (activePage === "Jobs") {
    return <Job activePage={activePage} />;
  }

  if (activePage === "Companies") {
    return <Company activePage={activePage} />;
  }

  if (activePage === "Applications") {
    return <Application activePage={activePage} />;
  }

  return (
    <main className="flex-1 p-6 bg-gray-50 overflow-auto">
      <h1 className="text-3xl font-bold">Select a page</h1>
    </main>
  );
}
