import {
  Entity,
  ResponseEntityUuidSchema,
  ResponseTimeStampSchema,
  Uuid,
  TimeStampSchema,
} from './base'
export interface ResponsePosseYearSchema
  extends ResponseEntityUuidSchema,
    ResponseTimeStampSchema {
  year: number
  entrance_date: string
}

export class PosseYear extends Entity<Uuid> implements TimeStampSchema {
  year: number
  entranceDate: string

  updatedAt: string

  constructor(props: ResponsePosseYearSchema) {
    super(props)
    this.year = props.year
    this.entranceDate = props.entrance_date
    this.updatedAt = props.updated_at
  }
}
