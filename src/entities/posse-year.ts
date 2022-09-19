import {
  EntitySchema,
  ResponseEntityUuidSchema,
  ResponseTimeStampSchema,
  TimeStampSchema,
  Uuid,
} from '~/entities/base'

export interface PosseYearSchema extends TimeStampSchema, EntitySchema<Uuid> {
  year: number
  entranceDate: string
}

export interface ResponsePosseYearSchema
  extends ResponseTimeStampSchema,
    ResponseEntityUuidSchema {
  year: number
  entranceDate: string
}
