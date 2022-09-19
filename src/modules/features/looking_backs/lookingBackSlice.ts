import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Optional } from '../../../entities/base'
import request from '~/modules/requests'
import { bldgBaseApiUri } from '~/modules/requests/api'

export interface LookingBackState {}

const initialState: LookingBackState = {}

// create looking backs
export const createLookingBack = createAsyncThunk<{}, {}, {}>()

// update looking backs

// delete looking backs
