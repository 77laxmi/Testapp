// import { configureStore, } from "@reduxjs/toolkit";
// import{counterReducer} from './ReduxToolkit/CounterSlice'


// export const store = configureStore({

//   reducer:{
//     counter:counterReducer
//   }
// })














//-------------------------------------------------------------------------------
// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from './ReduxToolkit/CounterSlice'
// export const store = configureStore({

//   reducer:{
//     counter:counterReducer
//   }
// })


//------------------------------------------------------------------------------------

// import {configureStore} from '@reduxjs/toolkit'
// import counterReducer from './ReduxToolkit/CounterSlice'

//  export const store = configureStore({

//     reducer:{
//       counter:counterReducer
//     }
//  })

// import {configureStore} from '@reduxjs/toolkit'
// import counterReducer from './ReduxToolkit/CounterSlice'

//  export const store = configureStore({
//   reducer:{
//     counter:counterReducer

//   }
// })
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './ReduxToolkit/CounterSlice'
export const store = configureStore({
  reducer:{
    counter:counterReducer
  }
})
