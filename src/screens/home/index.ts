import Home from './Home';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  favoriteCities: state.favoriteCities.citiesList,
});

const connectedHome = connect(mapStateToProps)(Home);

export default connectedHome;
