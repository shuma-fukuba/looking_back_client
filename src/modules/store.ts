import { configureStore } from '@reduxjs/toolkit'
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router'
import authReducer, { State as AuthState} from '~/modules/features/auth/authSlice'
import history from './history'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(routerMiddleware(history))
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
