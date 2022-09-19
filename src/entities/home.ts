import {
  ResponseEntityUuidSchema,
  ResponseTimeStampSchema,
  Entity,
  TimeStampSchema,
  Uuid,
} from './base'
import { WeekSchema } from './week'
import { ResponseUserSchema } from '~/entities/User'
import moment from 'moment'
import { ResponseLearningTimeSchema } from './learning-time'
import { LookingBack, ResponseLookingBackSchema } from './looking-back'

export interface Homeschema {
  user_id: string
  learning_time: ResponseLearningTimeSchema
  Looking_back: ResponseLookingBackSchema
}
