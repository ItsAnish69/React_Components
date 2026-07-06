
export default function Topbar(){
    return(
       <header className="h-16 px-8 flex items-center justify-between">
      <h2 className="font-semibold text-lg">
        Admin Dashboard
      </h2>

      <div className="flex items-center gap-3">
        <span className="text-gray-600">
          Welcome Admin
        </span>

        <img
          src="https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
          alt="profile"
          style={{
            width:50,
            height:50
          }}
        />
      </div>
    </header>
    )
}