import {useEffect, useRef, useState} from 'react';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {SortType} from '../../const';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import {switchSort} from '../../store/action';

const mapStateToProps = ({APP}: State) => ({
  currentSortOption: APP.currentSortOption,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  handleSortSwitch: (currentSortOption: SortType) => {
    dispatch(switchSort(currentSortOption));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function SortOptions(props: PropsFromRedux): JSX.Element {
  const {currentSortOption, handleSortSwitch} = props;
  const [sortOptionCurrent, setSortOptionCurrent] = useState(false);
  const sortRef = useRef<HTMLFormElement | null >(null);
  const toggleSortMenu = () => setSortOptionCurrent((prevSortOption) => !prevSortOption);

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      if (sortRef.current?.contains(evt.target as Node)) {
        return;
      }
      setSortOptionCurrent(false);
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <form ref={sortRef} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleSortMenu}>
        {currentSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sortOptionCurrent ? 'places__options--opened' : ''}`}>
        {Object.values(SortType).map((sortType) => {
          const isSortOptionCurrent = currentSortOption === sortType;
          return (
            <li
              key={sortType}
              className={`places__option ${isSortOptionCurrent ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => {
                handleSortSwitch(sortType);
                toggleSortMenu();
              }}
            >
              {sortType}
            </li>
          );

        })}
      </ul>
    </form>
  );
}

export {SortOptions};
export default connector(SortOptions);
