import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Optional } from '~/entities/base'
import request from '~/modules/requests'
import { bldgBaseApiUri } from '~/modules/requests/api'

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

export const signIn = createAsyncThunk<
  { user: string },
  signInArgs,
  { rejectValue: { user: undefined } }
>('auth/signIn', async ({ email, password }, thunkApi) => {
  try {
    const params = {
      email: email,
      password: password,
    }
    const res = await request.post({
      url: `${bldgBaseApiUri}/token`,
      params: params,
    })
    const { data } = res
    return data
  } catch (e) {
    return thunkApi.rejectWithValue({ user: undefined })
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload.user
    })
  },
})

export default authSlice.reducer
