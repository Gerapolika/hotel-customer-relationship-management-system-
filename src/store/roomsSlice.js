import { createSlice } from '@reduxjs/toolkit';

const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: {},
        error: '',
        guests: [],
    },
    reducers: {
        getDataRooms(state, action) {
            action.payload.rooms.map(room => {
                state.rooms[room.id] = {
                    checkInDate: room.checkInDate,
                    description: room.description,
                    features: room.features,
                    gallery: room.gallery,
                    guest: room.guest,
                    isCheckedIn: room.isCheckedIn,
                    number: room.number,
                    occupancy: room.occupancy.toString(),
                    price: room.price + '$',
                    type: room.type,
                }
            }),
            action.payload.rooms.filter(room => room.guest.length > 0).map(room => {
                state.guests.push({
                    text: room.guest,
                    value: room.guest,
                })
            })
        },
        setErrorRooms(state, action) {
            state.error = action.payload.error
            console.log(state.error)
        }
    }
})

export const { getDataRooms, setErrorRooms } = roomsSlice.actions;
export default roomsSlice.reducer;