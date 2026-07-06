export default function MainContent({ activePage }) {
  return (
    <main className="flex-1 p-6 bg-gray-50 overflow-auto">
      {activePage === "Dashboard" && (
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Dashboard Overview
          </h1>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg shadow">
              Total Users: 150
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              Total Jobs: 78
            </div>

            <div className="bg-white p-5 rounded-lg shadow">
              Applications: 320
            </div>
          </div>
        </div>
      )}
    </main>
  )}