import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    state: null,
};
const reducer = (state = initialState) => state;

export default configureStore({
    reducer: {
        reducer: reducer,
    },
});
