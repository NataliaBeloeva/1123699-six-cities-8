import {City} from '../../const';

type CityListProps = {
  currentCity: string;
  handleCitySwitch: (city: City) => void;
}

function CityList(props: CityListProps): JSX.Element {
  const {currentCity, handleCitySwitch} = props;
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.values(City).map((city) => {
              const isCurrent = currentCity === city;
              return (
                <li key={city} className="locations__item">
                  <a
                    className={`locations__item-link tabs__item ${isCurrent ? 'tabs__item--active' : ''}`}
                    href="#/"
                    onClick={(evt) => {
                      evt.preventDefault();
                      handleCitySwitch(city);
                    }}
                  >
                    <span>{city}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
}

export default CityList;
