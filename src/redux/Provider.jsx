'use client'

import { store } from "./store";

const { Provider } = require("react-redux")

function Providers({children}){
    return <Provider store={store}>{children}</Provider>
}

export default Providers;