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

export interface ResponseLookingBackSchema
  extends ResponseEntityUuidSchema,
    ResponseTimeStampSchema {
  GoodPoint: string
  WhyItWorked: string
  ShouldContinue: string
  BadPoint: string
  WhyItDidntWorked: string
  ShouldStop: string
  ImprovePoint: string

  Week: WeekSchema
  User: ResponseUserSchema
}

export class LookingBack extends Entity<Uuid> implements TimeStampSchema {
  goodPoint: string
  whyItWorked: string
  shouldContinue: string
  badPoint: string
  whyItDidntWorked: string
  shouldStop: string
  improvePoint: string

  createdAt: moment.Moment
  updatedAt: moment.Moment

  private _week: WeekSchema
  private _user: ResponseUserSchema

  constructor(props: ResponseLookingBackSchema) {
    super(props)

    this.goodPoint = props.GoodPoint
    this.whyItWorked = props.WhyItWorked
    this.shouldContinue = props.ShouldContinue
    this.badPoint = props.BadPoint
    this.whyItDidntWorked = props.WhyItDidntWorked
    this.shouldStop = props.ShouldStop
    this.improvePoint = props.ImprovePoint

    this.createdAt = moment(props.created_at)
    this.updatedAt = moment(props.updated_at)

    this._week = {
      uuid: props.Week.uuid,
      week: props.Week.week,
      createdAt: moment(props.Week.createdAt),
      updatedAt: moment(props.Week.updatedAt),
    }

    this._user = {
      uuid: props.User.uuid,
      username: props.User.username,
      email: props.User.email,
      hashedPassword: props.User.hashedPassword,
      university: props.User.university,
      universityEntranceYear: props.User.universityEntranceYear,
      expectedUniversityGraduationYear:
        props.User.expectedUniversityGraduationYear,
      lineId: props.User.lineId,
      gitHubUsername: props.User.gitHubUsername,
      gitHubRepository: props.User.gitHubRepository,
      gitHubAccessToken: props.User.gitHubAccessToken,
      posseYear: props.User.posseYear,
      updated_at: props.User.updated_at,
      created_at: props.User.created_at,
    }
  }

  get week(): number {
    return this._week.week
  }

  get user(): string {
    return this._user.username
  }
}
