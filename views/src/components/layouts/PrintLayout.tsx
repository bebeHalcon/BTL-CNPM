import { Footer, Header, Sidebar } from "components"
import { Outlet } from 'react-router-dom'
import { FormProvider } from '../../context/FormContext'
import Form from "../Form"
export const PrintLayout = () => {
  return (
    <div>
        <Header />
        <main className="grid grid-cols-8 h-screen">
            <FormProvider>
              <div className="col-span-1 h-screen">
                  <Sidebar />
              </div>
              <div className="col-span-7 h-screen">
                  <Form/>
              </div>
            </FormProvider>

        </main>
        <Footer />
    </div>
  )
}

export default PrintLayout