import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: "idle",
    value: []
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        whileLoading(state, action) {
            if (state.loading === 'idle') state.loading = 'loading';
        },
        afterRecieving(state, action) {
            if (state.loading === 'loading') {
                state.loading = 'idle';
                state.value = action.payload;
            }
        },
        addNewPost(state, action) {
            state.value = action.payload
        },
    }
})

export const { whileLoading, afterRecieving, addNewPost } = postSlice.actions

export default postSlice.reducer