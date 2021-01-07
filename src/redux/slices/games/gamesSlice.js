import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as types from "./types"

const initialState = ["Minecraft", "League of Legends", "Among Us", "Tian"]

export const fetchGames = createAsyncThunk(types.fetchGames, async () => {
  const url =
    "https://api.airtable.com/v0/appubNoSSCqNzaXQE/Games?api_key=keyEe9fOp9z24Pba2"

  const response = await fetch(url)
    .then((data) => data.json())
    .then((data) => data.records)
    .then((data) =>
      data.map((item) => ({
        id: item.id,
        name: item.fields.Name,
        logoUrl: item.fields.Logo[0].url,
        bannerUrl: item.fields.Banner[0].url,
      })),
    )

  return response
})

const gamesSlice = createSlice({
  name: types.games,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGames.fulfilled]: (state, action) => action.payload,
  },
})

export const selectAllGames = (state) => state.games
export const selectGameByName = (state, gameName) =>
  state.games.find((game) => game.name === gameName)

export default gamesSlice.reducer
