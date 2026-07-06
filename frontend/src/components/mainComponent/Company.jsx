import Tabs from "../../reuse/Tabs/Tabs";

const tabs = [
  {
    label: "Verified",
    content: <p>Details of Entire Jobs</p>,
  },
  {
    label: "Pending",
    content: <p>Details of Open Jobs</p>,
  },
  {
    label: "Archieved",
    content: <p>Details of Closed Jobs</p>,
  },
];

export default function Company({ activePage }) {
  return (
    <main className="flex-1 p-6 bg-gray-50 overflow-auto">
      {activePage === "Companies" && (
        <h1 className="text-3xl font-bold">Companies Page</h1>
      )}

      <div className="py-8">
        <Tabs tabs={tabs} />
      </div>
    </main>
  );
}
