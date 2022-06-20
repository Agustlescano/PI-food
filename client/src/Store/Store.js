import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../Reducer/reducer';

const store = configureStore(
    {reducer: rootReducer}
    )

export default store 