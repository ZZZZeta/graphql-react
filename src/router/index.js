import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// pages
import AnimeList from 'pages/anime/animeList';
import Anime from 'pages/anime/anime';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AnimeList} />
        <Route path="/anime/:id" component={Anime} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
