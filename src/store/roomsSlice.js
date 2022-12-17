import { createSlice } from '@reduxjs/toolkit';

const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: {},
        error: ''
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
                    occupancy: room.occupancy,
                    price: room.price,
                    type: room.type,
                }
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