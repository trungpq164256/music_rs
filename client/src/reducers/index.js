import { combineReducers } from "redux";
import player from "./playerReducer";
import playlist from "./playlistReducer";
import song from "./songReducer";
import area from "./areaReducer";

export default combineReducers({
  player,
  playlist,
  song,
  area,
});
