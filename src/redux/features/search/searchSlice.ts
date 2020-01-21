import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { formatRawShowInList } from '../../../utils';
import { Item } from '../../../types';
import { AppThunkType } from '../../store'

interface query {
 searchTerm: string,
}
interface setQuery {
 q: string,
}

interface setResults {
 results: Array<Item>,
}

type searchState = {
 results: Array<Item>,
} & query;

const initialState: searchState = {
 searchTerm: '',
 results: [],
}

const searchSlice = createSlice({
 name: 'search',
 initialState,
 reducers:{
  setSearchQuery(state, action: PayloadAction<setQuery>) {
   state.searchTerm = action.payload.q;
  },
  setSearchResults(state, action: PayloadAction<setResults>) {
   state.results = action.payload.results;
  },
 },
})

export const {
 setSearchQuery,
 setSearchResults,
} = searchSlice.actions


export const fetchShows = (
 searchTerm: string,
 ): AppThunkType => dispatch => {
  fetch(`http://api.tvmaze.com/search/shows?q=${ searchTerm }`)
  .then(res => res.json())
  .then(data => data.map(formatRawShowInList))
  .then(data => dispatch(setSearchResults({ results: data })))
  .catch(err => {throw err});
 }
 
 export default searchSlice.reducer;
