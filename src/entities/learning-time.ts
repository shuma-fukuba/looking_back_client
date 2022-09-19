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

export interface ResponseLearningTimeSchema
  extends ResponseEntityUuidSchema,
    ResponseTimeStampSchema {
  learningTime: number
  week: WeekSchema
  user: ResponseUserSchema
}

export class LearningTime extends Entity<Uuid> implements TimeStampSchema {
  learningTime: number
  createdAt: moment.Moment
  updatedAt: moment.Moment

  private _week: WeekSchema
  private _user: ResponseUserSchema

  constructor(props: ResponseLearningTimeSchema) {
    super(props)

    this.learningTime = props.learningTime

    this.createdAt = moment(props.created_at)
    this.updatedAt = moment(props.updated_at)

    this._week = {
      uuid: props.week.uuid,
      week: props.week.week,
      createdAt: props.week.createdAt,
      updatedAt: props.week.updatedAt,
    }

    this._user = {
      uuid: props.user.uuid,
      username: props.user.username,
      email: props.user.email,
      hashedPassword: props.user.hashedPassword,
      university: props.user.university,
      universityEntranceYear: props.user.universityEntranceYear,
      expectedUniversityGraduationYear:
        props.user.expectedUniversityGraduationYear,
      lineId: props.user.lineId,
      gitHubUsername: props.user.gitHubUsername,
      gitHubRepository: props.user.gitHubRepository,
      gitHubAccessToken: props.user.gitHubAccessToken,
      posseYear: props.user.posseYear,
      updated_at: props.user.updated_at,
      created_at: props.user.created_at,
    }
  }

  get week(): number {
    return this._week.week
  }

  get user(): string {
    return this._user.username
  }
}
