import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const index = state.items.findIndex((item) => {
        return item.card.info.id == action.payload.card.info.id;
      });
      if (index == -1) {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
    modifyitem: (state, action) => {
      const operation = action.payload.operation;
      const item = state.items.find((item) => {
        return item.card.info.id == action.payload.item.card.info.id;
      });
      if (operation == "add") {
        item.count += 1;
      } else {
        item.count -= 1;
        if (item.count == 0) {
          const index = state.items.findIndex((item) => {
            return item.card.info.id == action.payload.item.card.info.id;
          });
          state.items.splice(index, 1);
        }
      }
    },
  },
});
export const { addItem, deleteItem, clearCart,modifyitem } = cartSlice.actions;
export default cartSlice.reducer;
