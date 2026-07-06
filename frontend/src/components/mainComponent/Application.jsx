import Tabs from "../../reuse/Tabs/Tabs";

const tabs = [
    {
        label: "Pending",
        content: <p>Details of Entire Jobs</p>
    },{
        label: "Accepted",
        content: <p>Details of Open Jobs</p>
    },
    {
        label: "Rejected",
        content: <p>Details of Closed Jobs</p>
    }
]

export default function Application({ activePage }) {
  return (
    <main className="flex-1 p-6 bg-gray-50 overflow-auto">
      {activePage === "Applications" && (
        <h1 className="text-3xl font-bold">Application Page</h1>
      )}

      <div className="py-8">
        <Tabs tabs={tabs} />
      </div>
    </main>
  );
}
