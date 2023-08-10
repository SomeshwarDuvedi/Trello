import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: 'listSlice',
    initialState: {
        list: []
    },
    reducers: {
        addList: (state, action) => {
            state.list.push(action.payload)
            console.log("Action Called", state.list)
        },
        addCard: (state, action) => {
            console.log("Action", action, state.list)
            state.list.forEach((item) => {
                if (item.id === action.payload.parentId) {
                    if (Object.hasOwn(item, "children")) {
                        item.children.push(action.payload)
                    } else {
                        item.children = [];
                        item.children.push(action.payload)
                    }
                }
            })
        }
    }
})

export const { addList, addCard } = listSlice.actions;
export default listSlice.reducer;