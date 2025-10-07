import {createSlice} from "@reduxjs/toolkit"
interface LanguageTypes{
    language:"en" |"ru" | "kg"
}

const init: LanguageTypes = {
    language: "kg",
};


export const languageSLice = createSlice({
    name: "language",
    initialState: init,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        }
    },
})

export default languageSLice.reducer;