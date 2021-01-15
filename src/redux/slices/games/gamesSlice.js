import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as types from "./types"

export const allGame = {
  id: "rec13thvcp5VUJgXg",
  name: "All Games",
  logoUrl:
    "https://dl.airtable.com/.attachments/3eda9522779e84748dde4adbe1c88297/84a0feb9/AllGames_Logo.png",
  bannerUrl:
    "https://dl.airtable.com/.attachments/3580626a5b2240ea48d6b797edc1d40d/948cefad/AllGames_Banner.png",
}
const otherGame = {
  id: "recya1yYthNT4SOef",
  name: "Other Games",
  logoUrl:
    "https://dl.airtable.com/.attachments/aa157687a96b18491e2e4a051d2cc040/6705afa9/OtherGames_Logo.png",
  bannerUrl:
    "https://dl.airtable.com/.attachments/4bb2a52596f4ebc778739cb598cb6216/8807cca1/Other_Banner.png",
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
