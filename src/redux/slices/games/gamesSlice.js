import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as types from "./types"

export const allGame = {
  id: "rec13thvcp5VUJgXg",
  name: "All Games",
  logoUrl:
    "https://dl.airtable.com/.attachments/aa157687a96b18491e2e4a051d2cc040/6705afa9/OtherGames_Logo.png",
  bannerUrl:
    "https://dl.airtable.com/.attachments/e6322c158edd9b072e9516b2d42b3a16/0e72f660/GTA5_Banner.png",
}
const otherGame = {
  id: "recya1yYthNT4SOef",
  name: "Other Games",
  logoUrl:
    "https://dl.airtable.com/.attachments/aa157687a96b18491e2e4a051d2cc040/6705afa9/OtherGames_Logo.png",
  bannerUrl:
    "https://dl.airtable.com/.attachments/f19c680189fe517d0eed9c937d6b0d39/43d7d416/OtherGames_Banner.png",
}

const initialState = [allGame, otherGame]

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

// exclude `allGame` object
export const selectAllGames = (state) => state.games.filter((_, i) => i !== 0)

export const selectAllFilterGames = (state) => state.games
export const selectGameByName = (state, gameName) =>
  state.games.find((game) => game.name === gameName)

export default gamesSlice.reducer
