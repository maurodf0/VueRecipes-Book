import type { PiniaPluginContext } from "pinia";

//get the state of the App - give as the context of the store
const localStoragePlugin = (context: PiniaPluginContext) => {
    const { store } = context;
    
    const storedState = localStorage.getItem(
        store.$id
    );

    if(storedState){
        store.$patch(JSON.parse(storedState));
    }

    store.$subscribe( (mutation, state) => {
        localStorage.setItem(
            store.$id, JSON.stringify(state)
        )
    } )
}

export default localStoragePlugin;