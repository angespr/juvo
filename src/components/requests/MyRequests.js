import '../../styles/requests/MyRequests.css';
import Header from '../Header';
import Requests from './Requests';
import { getUserIdFromToken } from '../../utility/AuthUtil';
import { useNavigate } from 'react-router-dom';

function MyRequests() {
  const navigate = useNavigate();
  const userId = getUserIdFromToken();
  
  if (!userId) {
    navigate('/login');
    return null;
  }

  return (
    <div className="my-requests-wrapper">
      <Header />
      <div className="my-requests-content">
        <Requests
          header="Active Requests"
          endpoint={`https://juvoproject.com/api/requests/user/${userId}/active`}
          toggleable
          isMine
        />
        <Requests
          header="Completed Requests"
          endpoint={`https://juvoproject.com/api/requests/user/${userId}/completed`}
          toggleable
          isMine
        />
      </div>
    </div>
  );
}

export default MyRequests;