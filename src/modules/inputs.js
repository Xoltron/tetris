import { game } from './game';
import { playground } from './playground';
import { tetromino } from './tetrominoes';
import { init } from './config';

export const inputs = {
  keys: {
    left: 37,
    right: 39,
    down: 40,
    rotLeft: 65,
    rotRight: 90,
    save: 69,
  },

  handleKeyPress(e) {
    if (game.gameStatut === 'play') {
      if (e.keyCode === this.keys.left) {
        console.log('moving tetromino left');
        tetromino.moveLeft();
      }
      if (e.keyCode === this.keys.right) {
        console.log('moving tetromino right');
        tetromino.moveRight();
      }
      if (e.keyCode === this.keys.down) {
        console.log('moving tetromino down');
        tetromino.pushDown();
      }
      if (e.keyCode === this.keys.rotLeft) {
        console.log('rotating tetromino to the left');
        tetromino.rotateTetromino('left');
      }
      if (e.keyCode === this.keys.rotRight) {
        console.log('rotating tetromino to the right');
        tetromino.rotateTetromino('right');
      }
      if (e.keyCode === this.keys.save) {
        console.log('saving tetromino');
        game.saveTetromino();
      }
    }
  },
  handleStart() {
    game.start();
  },
  handleReset() {
    game.reset();
  },
  handleBackMenu() {
    game.backMenu();
  },
  handleStart() {
    game.start();
  },
  setListener(bool) {
    if (bool) {
      console.log('setting event listeners');
      // document
      //   .getElementById('configPanel')
      //   .addEventListener('change', () => playground.handleConfigUpdate());
      document.getElementById('resetButton').addEventListener('click', this.handleReset);
      document.getElementById('startButton').addEventListener('click', this.handleStart);
      document.getElementById('backMenu').addEventListener('click', this.handleBackMenu);
      document.addEventListener('keydown', this.handleKeyPress.bind(this));
    } else {
      console.log('removing event listeners');
      // document
      //   .getElementById('configPanel')
      //   .removeEventListener('change', () => playground.handleConfigUpdate());
      document.getElementById('resetButton').removeEventListener('click', this.handleReset);
      document.getElementById('startButton').removeEventListener('click', this.handleReset);
      document.getElementById('backMenu').removeEventListener('click', this.handleReset);
      document.removeEventListener('keydown', this.handleKeyPress.bind(this));
    }
  },
  // removeListener() {
  //   document
  //     .getElementById('configPanel')
  //     .removeEventListener('change', () => playground.handleConfigUpdate());
  //   document.getElementById('resetButton').removeEventListener('click', () => game.reset());
  //   document.getElementById('startButton').removeEventListener('click', () => game.start());
  //   document.removeEventListener('keydown', this.handleKeyPress);
  // },
};
