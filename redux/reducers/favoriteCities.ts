type Action = {
  type: string;
  payload?: any;
};

const initialState = {
  citiesList: [
    {
      cityName: 'London',
      date: 'Friday 18, september',
      time: '2:38 p.m.',
      temp: '18°',
      icon: 'add',
    },
    {
      cityName: 'Turin',
      date: 'Friday 18, september',
      time: '3:38 p.m.',
      temp: '22°',
      icon: 'search',
    },
    {
      cityName: 'Rome',
      date: 'Friday 18, september',
      time: '3:38 p.m.',
      temp: '20°',
      icon: 'home',
    },
    {
      cityName: 'Miami',
      date: 'Friday 18, september',
      time: '2:38 p.m.',
      temp: '18°',
      icon: 'add',
    },
    {
      cityName: 'Chicago',
      date: 'Friday 18, september',
      time: '3:38 p.m.',
      temp: '22°',
      icon: 'search',
    },
    {
      cityName: 'Moscow',
      date: 'Friday 18, september',
      time: '3:38 p.m.',
      temp: '20°',
      icon: 'home',
    },
  ],
};

const favoriteCities = (state: any = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default favoriteCities;
