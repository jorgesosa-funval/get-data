import { redirect } from "next/navigation"
import { cookies } from "next/headers"
//components
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"

function AuthLayout({ children }) {

  const token = cookies().get('token')
  if (!token) {
    redirect('/auth/login')
  }

  return (
    <div className="h-screen w-full flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="w-full flex-grow p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AuthLayout