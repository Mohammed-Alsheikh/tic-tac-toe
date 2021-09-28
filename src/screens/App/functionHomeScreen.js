import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const [gameState, setGameState] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [initializeGame, setInitializeGame] = useState(0);
  const initializeMyGame = () => {
    setInitializeGame([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  };
  useEffect(() => initializeMyGame());

  var boardPress = (row, col) => {
    //dont change X and O
    var value = gameState[row][col];
    if (value != 0) {
      return;
    }

    //current player
    var currentPlayer = currentPlayer;

    //set correct tile
    var arr = gameState.slice();
    arr[row][col] = currentPlayer;
    const gameState = () => {
      setGameState({gameState: arr});
    };

    //switch to another player..
    var nextPlayer = currentPlayer == 1 ? -1 : 1;
    const setCurrentPlayer = () => {
      setCurrentPlayer({currentPlayer: nextPlayer});
    };

    //check the winner
    var winner = getWinner();
    if (winner == 1) {
      Alert.alert('the winner is player 1');
      initializeGame();
    } else if (winner == -1) {
      Alert.alert('the winner is player 2');
      initializeGame();
    }
  };

  const renderIcon = (row, col) => {
    var value = gameState[row][col];
    switch (value) {
      case 1:
        return <Icon name="close" style={styles.xStyle} />;
      case -1:
        return <Icon name="circle-outline" style={styles.oStyle} />;
      default:
        return <View />;
    }
  };

  const getWinner = () => {
    const Min_tile = 3;
    var arr = gameState;
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

  const newGame = () => {
    initializeGame();
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => boardPress(0, 0)}
          style={[styles.board, {borderTopWidth: 0, borderLeftWidth: 0}]}>
          {renderIcon(0, 0)}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => boardPress(0, 1)}
          style={[styles.board, {borderTopWidth: 0}]}>
          {renderIcon(0, 1)}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => boardPress(0, 2)}
          style={[styles.board, {borderTopWidth: 0, borderRightWidth: 0}]}>
          {renderIcon(0, 2)}
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => boardPress(1, 0)}
          style={[styles.board, {borderLeftWidth: 0}]}>
          {renderIcon(1, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => boardPress(1, 1)} style={styles.board}>
          {renderIcon(1, 1)}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => boardPress(1, 2)}
          style={[styles.board, {borderRightWidth: 0}]}>
          {renderIcon(1, 2)}
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => boardPress(2, 0)}
          style={[styles.board, {borderLeftWidth: 0, borderBottomWidth: 0}]}>
          {renderIcon(2, 0)}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => boardPress(2, 1)}
          style={[styles.board, {borderBottomWidth: 0}]}>
          {renderIcon(2, 1)}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => boardPress(2, 2)}
          style={[styles.board, {borderRightWidth: 0, borderBottomWidth: 0}]}>
          {renderIcon(2, 2)}
        </TouchableOpacity>
      </View>
      <View style={{margin: 30}}>
        <Button title="New Game" onPress={newGame} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
    top: 90,
  },
  board: {
    width: 100,
    height: 100,
    borderWidth: 1,
  },
  xStyle: {
    flex: 1,
    color: 'red',
    fontSize: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  oStyle: {
    flex: 1,
    color: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 70,
  },
});
export default HomeScreen;
