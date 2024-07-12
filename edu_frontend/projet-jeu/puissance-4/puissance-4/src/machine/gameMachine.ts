import { createMachine } from "xstate";
import { createModel } from "@xstate/test"; //??? why on the app it doesn't find
enum GameStates {
  LOBBY = "LOBBY",
  PLAY = "PLAY",
  VICTORY = "VICTORY",
  DRAW = "DRAW",
}
export const GameModel = createModel();
export const GameMachine = createMachine({
  id: "game",
  initial: GameStates.LOBBY,
  states: {
    [GameStates.LOBBY]: {
      on: {
        join: {
          target: GameStates.LOBBY,
        },
        leave: {
          taret: GameStates.LOBBY,
        },
        choseColor: {
          target: GameStates.LOBBY,
        },
        start: {
          target: GameStates.PLAY,
        },
      },
    },
    [GameStates.PLAY]: {
      on: {
        dropToken: {
          target: "???", //we don't know yet
        },
      },
    },
    [GameStates.VICTORY]: {
      on: {
        restart: {
          target: GameStates.LOBBY,
        },
      },
    },
  },
});
