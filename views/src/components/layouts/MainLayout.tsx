import { Footer, Header } from "components"
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  )
}