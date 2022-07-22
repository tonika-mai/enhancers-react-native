import CityDetail from './CityDetail';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  currentWeather: state.currentCityWeather.weather,
});

const connectedCityDetail = connect(
  mapStateToProps,
  //   mapDispatchToProps,
)(CityDetail);

export default connectedCityDetail;
