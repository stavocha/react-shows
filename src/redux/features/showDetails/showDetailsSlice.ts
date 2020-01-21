import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { formatRawSingleShow } from '../../../utils';
import { Item } from '../../../types';
import { AppThunkType } from '../../store'

interface setSelectedShow {
 show: Item,
}
interface defaultShowState {
 selected: Item,
}

interface setShowCast {
 results: Array<object>,
}

const initialState: defaultShowState = {
 selected: {
  id: '',
  pic: '',
  title: '',
  score: undefined,
  description: '',
  relatedItems: undefined,
 }
}

const selectedShowSlice = createSlice({
 name: 'selectedShow',
 initialState,
 reducers:{
  setSelectedShow(state, action: PayloadAction<setSelectedShow>) {
   state.selected = action.payload.show;
  },
 },
})

export const {
 setSelectedShow,
} = selectedShowSlice.actions


export const fetchShowDetails = (
 id: string,
 ): AppThunkType => dispatch => {
  fetch(`http://api.tvmaze.com/shows/${id}?embed[]=cast`)
  .then(res => res.json())
  .then(data => formatRawSingleShow(data))
  .then(data => dispatch(setSelectedShow({ show: data })))
  .catch(err => {throw err});
 }
 
 export default selectedShowSlice.reducer;
