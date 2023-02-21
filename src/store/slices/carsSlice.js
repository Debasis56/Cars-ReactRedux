import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;

        },
        addCars(state, action){

            //Assumption
            //action.payload === {name: 'Carname', cost: CarCost}

            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            });

        },
        removeCars(state, action){


            //Assumption
            //action.payload === the id of the car we want to delete


            const updated = state.data.filter((car) => {
                return car.id !== action.payload
            });

            state.data = updated;

        },
    }
});

export const {addCars, removeCars, changeSearchTerm} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;