 import Tabs from "../../reuse/Tabs/Tabs";
 
 const tabs = [
    {
      label: "All Users",
      content: <p>List of all users.</p>,
    },
    {
      label: "Recruiters",
      content: <p>Top Recruiters hiring.</p>,
    },
    {
      label: "Employer",
      content: <p>All employer details.</p>,
    },
  ];


export default function User({activePage}){
 return(
    <main className="flex-1 p-6 bg-gray-50 overflow-auto">
        {activePage === "Users" && (
             <h1 className="text-3xl font-bold">
          Users Page
        </h1>
        )}
        
        <div className="py-8 ">
        <Tabs tabs={tabs}/>
        </div>
    </main>
 )   
}