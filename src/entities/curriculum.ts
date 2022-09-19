import {
  ResponseEntityUuidSchema,
  ResponseTimeStampSchema,
  Entity,
  TimeStampSchema,
  Uuid,
} from './base'
import moment from 'moment'

export interface ResponseCurriculumSchema extends ResponseEntityUuidSchema, ResponseTimeStampSchema {
  curriculum_name: string
}

export class Curriculum extends Entity<Uuid> implements TimeStampSchema {
  curriculumName: string

  createdAt: moment.Moment
  updatedAt: moment.Moment

  constructor(props: ResponseCurriculumSchema) {
    super(props)

    this.curriculumName = props.curriculum_name
    this.createdAt = moment(props.created_at)
    this.updatedAt = moment(props.updated_at)
  }
}
