import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cardsSlice",
  initialState: {
    cards: {},
  },
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.card[id] = { id, front, back };
    },
  },
});

export const selectCardsById = (id) => (state) => state.cards.cards[id];
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
