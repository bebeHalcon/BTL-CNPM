import { Footer, Header, SidebarAdmin } from "components"
import { Outlet } from 'react-router-dom'

export const AdminLayout = () => {
  return (
    <div>
        <Header />
        <main className="grid grid-cols-8">
            <div className="col-span-1">
                <SidebarAdmin />
            </div>
            <div className="col-span-7">
                <Outlet />
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default AdminLayout