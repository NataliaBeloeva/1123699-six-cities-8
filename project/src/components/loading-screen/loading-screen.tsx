import ReactLoader from 'react-loader-spinner';

function LoadingScreen(): JSX.Element {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}} data-testid="loader">
      <ReactLoader type="ThreeDots" color="#4481c3" height={100} width={100} />
    </div>
  );
}

export default LoadingScreen;
