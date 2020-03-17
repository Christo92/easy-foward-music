import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '@components/Loading/Loading';
import Home from '@components/Home/Home';
import SwitchMusic from '@components/SwitchMusic/SwitchMusic';
import User from '@components/SwitchMusic/SpotifySwitch/UserSpotify/User';
import SpotifyPlaylist from '@components/SwitchMusic/SpotifySwitch/SpotifyPlaylist/SpotifyPlaylist';
import NotFound from '@components/NotFound/NotFound';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Loading} />
        <Route path="/home" component={Home} />
        <Route path="/switch-music" component={SwitchMusic} />
        <Route path="/userSpotify" component={User} />
        <Route path="/spotifyPlaylist" component={SpotifyPlaylist} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
