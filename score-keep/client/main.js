import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from '../imports/api/players';
import TitleBar from '../imports/ui/TitleBar';
import AddPlayer from '../imports/ui/AddPlayer';
import Player from '../imports/ui/Player';

const renderPlayers = (playerList) => {
  return playerList.map(player => {
    return <Player key={player._id} player={player} />
  });
}

Meteor.startup( () => {
  Tracker.autorun( () => {
    const players = Players.find().fetch();
    const jsx = (
      <div>
        <TitleBar title="Score Keep" subtitle="Created by Cale Dunlap"/>
        <div>{renderPlayers(players)}</div>
        <AddPlayer />
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });

});
