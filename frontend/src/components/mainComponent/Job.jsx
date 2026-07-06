import Tabs from "../../reuse/Tabs/Tabs"

const tabs = [
    {
        label: "All Jobs",
        content: <p>Details of Entire Jobs</p>
    },{
        label: "Open Jobs",
        content: <p>Details of Open Jobs</p>
    },
    {
        label: "Closed Jobs",
        content: <p>Details of Closed Jobs</p>
    }
]

export default function Job({activePage}){
 return(
    <main className="flex-1 p-6 bg-gray-50 overflow-auto">
        {activePage === "Jobs" && (
             <h1 className="text-3xl font-bold">
          Job Pages
        </h1>
        )}

        <div className="py-8">
            <Tabs tabs={tabs}/>
        </div>
    </main>
 )   
}