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

export interface SignInArgs {
  email: string
  password: string
}

export const signIn = createAsyncThunk<
  { token: string },
  SignInArgs,
  { rejectValue: { token: undefined } }
>('auth/signIn', async ({ email, password }, thunkApi) => {
  try {
    const datas = {
      username: email,
      password: password,
    }
    const res = await request.post({
      url: `${bldgBaseApiUri}/token`,
      data: datas,
    })
    const { data } = res
    console.log(data)
    return { token: 'adfadhsifo' }
  } catch (e) {
    return thunkApi.rejectWithValue({ token: undefined })
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
