import { useDispatch} from 'react-redux'
import { useSelector } from '~/modules/store'
import {} from 'react-router-dom'

interface AuthGuardProps {
  children: any
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const user = useSelector((state) => state.auth.user)

  const isSignedIn = !!user

  return <Component {
    ...{
      isSignedIn,
      children
    }
  }/>
}

interface IProps {
    isSignedIn: boolean
    children: any
}

export const Component: React.FC<IProps> = ({
    isSignedIn,
    children
}) => {
    if (isSignedIn) {
        return children
    }

    // const from = encodeURIComponent(pathname + query)
  return <Redirect to={{ pathname: '/', search: `?from=${}` }} />
}

export default AuthGuard
