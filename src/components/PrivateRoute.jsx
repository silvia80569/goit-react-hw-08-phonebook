import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/auth/selectors';

const PrivateRoute = ({ element: Component }) => {
  const isLoggedIn = useSelector(selectIsLoading);
  return isLoggedIn ? Component : <Navigate to="/login" />;
};

export default PrivateRoute;
