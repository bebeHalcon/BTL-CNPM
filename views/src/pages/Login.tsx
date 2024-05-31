import { LoginTemplate } from "components"
import { useLocation } from 'react-router-dom';


export const Login = () => {
  const location = useLocation();
  const { state } = location;

  const { Admin } = state as { Admin: boolean };;
  
  return (
    <LoginTemplate Admin = {Admin}></LoginTemplate>
  )
}

export default Login