import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from '../imports/api/players';


const players = [{
  _id: 1,
  name: 'Cale',
  score: 99
}, {
  _id: 2,
  name: 'Elizabeth',
  score: 99
}];

function renderPlayers (playerList) {
  return playerList.map(player => {
    return <p key={player._id}>
      {player.name} has {player.score} point(s).
    </p>;
  });
}

Meteor.startup(function () {
  Tracker.autorun(function () {
    const players = Players.find().fetch();

    const name = 'Cale';
    const jsx = (
      <div>
        <h1>Account Settings</h1>
        <p>Hello {name}</p>
        <div>{renderPlayers(players)}</div>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });

});
