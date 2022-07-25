import Home from './Home';
import actions from '../../../redux/actions';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  favoriteCities: state.favoriteCities.citiesList,
});

const mapDispatchToProps = dispatch => ({
  updateFavWeather: (weather, cityName) =>
    dispatch(actions.updateFavCityWeather({weather, cityName})),
  setCurrentWeather: (weather, cityName) =>
    dispatch(actions.setCurrentCityWeather({weather, cityName})),
  removeFromFavs: cityName => dispatch(actions.removeFromFavs(cityName)),
});

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default connectedHome;
