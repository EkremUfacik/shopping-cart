import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlices";
import storage from "redux-persist/lib/storage/";
import {
  persistStore,
  persistReducer,
  //   FLUSH,
  //   REHYDRATE,
  //   PAUSE,
  //   PERSIST,
  //   PURGE,
  //   REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

export const persistor = persistStore(store);
export default store;
