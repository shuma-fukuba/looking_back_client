import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Optional } from '~/entities/base'

export type State = {
  user: Optional<string> | null
  token: string | null
  // error?: Error
}

const initialState: State = {
  user: null,
  token: null,
}

export interface signInArgs {
  email: string
  password: string
}

// export const signIn = createAsyncThunk<
// { user: string},
// signInArgs,
// {rejectValue: {user: undefined}}
// >('auth/signIn', async ({email,  password}, thunkApi) => {
//     try{

//     }
// })
