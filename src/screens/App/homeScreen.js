import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './homeScreenStyle';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      currentPlayer: 1,
    };
  }
  componentDidMount() {
    this.initializeGame();
  }
  initializeGame = () => {
    this.setState({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      currentPlayer: 1,
    });
  };

  boardPress = (row, col) => {
    //dont change X and O
    var value = this.state.gameState[row][col];
    if (value != 0) {
      return;
    }

    //current player
    var currentPlayer = this.state.currentPlayer;

    //set correct tile
    var arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr});

    //switch to another player..
    var nextPlayer = currentPlayer == 1 ? -1 : 1;
    this.setState({currentPlayer: nextPlayer});

    //check the winner
    var winner = this.getWinner();
    if (winner == 1) {
      Alert.alert('the winner is player 1');
      this.initializeGame();
    } else if (winner == -1) {
      Alert.alert('the winner is player 2');
      this.initializeGame();
    }
  };

  renderIcon = (row, col) => {
    var value = this.state.gameState[row][col];
    switch (value) {
      case 1:
        return <Icon name="close" style={styles.xStyle} />;
      case -1:
        return <Icon name="circle-outline" style={styles.oStyle} />;
      default:
        return <View />;
    }
  };

  getWinner = () => {
    const Min_tile = 3;
    var arr = this.state.gameState;
    var sum;

    //check rows
    for (var i = 0; i < Min_tile; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }

    //check columns
    for (var i = 0; i < Min_tile; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }

    //check the diagonals
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum == 3) {
      return 1;
    } else if (sum == -3) {
      return -1;
    }
    sum = arr[2][0] + arr[1][1] + arr[0][2];
    if (sum == 3) {
      return 1;
    } else if (sum == -3) {
      return -1;
    }

    //if no winners
    return 0;
  };

  newGame = () => {
    this.initializeGame();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.boardPress(0, 0)}
            style={[styles.board, {borderTopWidth: 0, borderLeftWidth: 0}]}>
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.boardPress(0, 1)}
            style={[styles.board, {borderTopWidth: 0}]}>
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.boardPress(0, 2)}
            style={[styles.board, {borderTopWidth: 0, borderRightWidth: 0}]}>
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.boardPress(1, 0)}
            style={[styles.board, {borderLeftWidth: 0}]}>
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.boardPress(1, 1)}
            style={styles.board}>
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.boardPress(1, 2)}
            style={[styles.board, {borderRightWidth: 0}]}>
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.boardPress(2, 0)}
            style={[styles.board, {borderLeftWidth: 0, borderBottomWidth: 0}]}>
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.boardPress(2, 1)}
            style={[styles.board, {borderBottomWidth: 0}]}>
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.boardPress(2, 2)}
            style={[styles.board, {borderRightWidth: 0, borderBottomWidth: 0}]}>
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
        <View style={{margin: 30}}>
          <Button title="New Game" onPress={this.newGame} />
        </View>
      </View>
    );
  }
}
