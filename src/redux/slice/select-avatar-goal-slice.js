import { createSlice } from "@reduxjs/toolkit";

export const setAvatarGoalSlice = createSlice({
    name: "setAvatarGoal",
    initialState: { avatar: null, goal: 3 },
    reducers: {
        setAvatar: (state, action) => {
            state.avatar = action.payload;
        },
        setGoal: (state, action) => {
            state.goal = action.payload;
        },
    },

});

export const { setAvatar, setGoal } = setAvatarGoalSlice.actions;

export default setAvatarGoalSlice.reducer;
