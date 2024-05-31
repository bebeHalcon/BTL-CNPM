import { router } from 'routes'
import { useRoutes } from 'react-router-dom'

function App() {
  return (
    <div>
      {
        useRoutes(router)
      }
    </div>
  )
}

export default App
