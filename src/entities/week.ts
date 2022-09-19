import {
  EntitySchema,
  ResponseEntityUuidSchema,
  ResponseTimeStampSchema,
  TimeStampSchema,
  Uuid,
} from '~/entities/base'

export interface WeekSchema extends TimeStampSchema, ResponseEntityUuidSchema {
  week: number
}

export interface ResponseWeekSchema
  extends ResponseTimeStampSchema,
    ResponseEntityUuidSchema {
  week: number
}
