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

function handleSubmit(e) {
  e.preventDefault();

  const playerName = e.target.playerName.value;

  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0
    });
  }
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
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name"/>
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });

});
