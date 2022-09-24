import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
  useDispatch as rawUseDispatch,
} from 'react-redux'
import { AppDispatch, RootState } from '~/modules/store'

export const useDispatch = () => rawUseDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
