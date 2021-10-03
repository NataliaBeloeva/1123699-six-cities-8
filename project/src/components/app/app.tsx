import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  cardCount: number,
  placeCount: number,
}

function App({cardCount, placeCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen cardCount={cardCount} placeCount={placeCount}/>
  );
}

export default App;
