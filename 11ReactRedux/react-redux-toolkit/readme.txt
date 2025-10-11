1. create store component 
2. app component ko wrap krna hai
   -> paste provider and store inside main.jsx
   import { Provider } from 'react-redux'
   import { store } from './store'
   ->then wrap app in provider
    <Provider store={store}>
      <App />
    </Provider>
3. create slice 
    actions -> increment, decrement,incrementByAmount
    register slice (increment action) in store to increment things or update
4. register reducer in store  
    counter: counterReducer
    import counterReducer from "../features/counter/counterSlice";

-> useSelector used to fetch value from data or store.js
   const count = useSelector((state) => state.counter.value)

->useDispatch() used to handle actions like increment decrement 
