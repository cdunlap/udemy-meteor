import React from 'react';
import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayers () {
    if(this.props.players.length > 0) {
      return this.props.players.map(player => {
        return <Player key={player._id} player={player} />
      })
    }
    return (
      <div className="item">
        <p>Add your first player to get started</p>
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    )
  }
}

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
}
