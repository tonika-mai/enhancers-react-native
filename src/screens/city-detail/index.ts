import CityDetail from './CityDetail';
import actions from '../../../redux/actions';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  favoriteCities: state.favoriteCities.citiesList,
  currentWeather: state.currentCityWeather.weather,
});

const mapDispatchToProps = dispatch => ({
  addToFavs: city => dispatch(actions.addToFavs(city)),
});

const connectedCityDetail = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CityDetail);

export default connectedCityDetail;
