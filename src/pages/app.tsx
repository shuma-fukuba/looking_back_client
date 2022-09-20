import { useDispatch } from 'react-redux'

interface AuthGuardProps {
  children: any
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const dispatch = useDispatch()
}
