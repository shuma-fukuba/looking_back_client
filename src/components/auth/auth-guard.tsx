import { useDispatch} from 'react-redux'
import { useSelector } from '~/modules/store'

interface AuthGuardProps {
  children: any
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
}
