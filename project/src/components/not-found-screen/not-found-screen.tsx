import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <div style={{marginTop: '50px'}}>
      <h1 style={{textAlign: 'center'}}>404 Not Found</h1>
      <p style={{textAlign: 'center'}}><Link to={AppRoute.Root} style={{color: '#4481c3', textDecoration: 'underline'}}>Back to main page</Link></p>
    </div>
  );
}

export default NotFoundScreen;
