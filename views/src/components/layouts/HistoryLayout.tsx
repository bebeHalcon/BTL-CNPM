import { Footer, Header, SidebarHistory } from "components"
import { Outlet } from 'react-router-dom'

export const HistoryLayout = () => {
  return (
    <div>
        <Header />
        <main className="grid grid-cols-8">
            <div className="col-span-1">
                <SidebarHistory />
            </div>
            <div className="col-span-7">
                <Outlet />
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default HistoryLayout