import * as actionTypes from '../constants/actionTypes';

const initialState = [];

const setTracks = (state, action) => [...state, ...action.tracks];

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TRACKS_SET:
      return setTracks(state, action);
  }
  return state;
}
