import { createSlice } from '@reduxjs/toolkit';

const accountsSlice = createSlice({
    name: 'accounts',
    initialState: {
        accounts: {},
        error: '',
        logged: false
    },
    reducers: {
        getDataAccounts(state, action) {
            var keys = Object.keys(action.payload.accounts)
            for (var i = 0; i < Object.keys(action.payload.accounts).length; i++) {
                state.accounts[keys[i]] = {
                    image: action.payload.accounts[keys[i]].image,
                    password: action.payload.accounts[keys[i]].password,
                }
            }
        },
        setErrorAccounts(state, action) {
            state.error = action.payload.error
            console.log(state.error)
        },
        logIn(state, action) {
            state.logged = action.payload
        }
    }
})

export const { getDataAccounts, setErrorAccounts, logIn } = accountsSlice.actions;
export default accountsSlice.reducer;