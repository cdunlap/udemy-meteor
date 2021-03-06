import React from 'react';
import FlipMove from 'react-flip-move';
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
        <p className="item__message item__message--empty">Add your first player to get started</p>
      </div>
    )
  }

  render () {
    return (
      <div>
        <FlipMove>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    )
  }
}

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
}
