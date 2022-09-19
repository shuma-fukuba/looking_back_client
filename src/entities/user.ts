import moment from 'moment'
import { PosseYearSchema } from './posse-year'
import {
  Entity,
  ResponseEntityUuidSchema,
  ResponseTimeStampSchema,
  Uuid,
  Optional,
} from '~/entities/base'

export interface ResponseUserSchema
  extends ResponseEntityUuidSchema,
    ResponseTimeStampSchema {
  username: string
  email: string
  hashedPassword: string
  university: string
  universityEntranceYear: number
  expectedUniversityGraduationYear: number
  lineId: Optional<string>
  gitHubUsername: Optional<string>
  gitHubRepository: Optional<string>
  gitHubAccessToken: Optional<string>
  posseYear: PosseYearSchema
}

export class User extends Entity<Uuid> {
  username: string
  email: string
  hashedPassword: string
  university: string
  universityEntranceYear: number
  expectedUniversityGraduationYear: number
  lineId: Optional<string>
  gitHubUsername: Optional<string>
  gitHubRepository: Optional<string>
  gitHubAccessToken: Optional<string>

  private _posseYear: PosseYearSchema

  constructor(props: ResponseUserSchema) {
    super(props)

    this.username = props.username
    this.email = props.email
    this.hashedPassword = props.hashedPassword
    this.university = props.university
    this.universityEntranceYear = props.universityEntranceYear
    this.expectedUniversityGraduationYear =
      props.expectedUniversityGraduationYear
    this.lineId = props.lineId
    this.gitHubUsername = props.gitHubUsername
    this.gitHubRepository = props.gitHubRepository
    this.gitHubAccessToken = props.gitHubAccessToken

    this._posseYear = {
      id: props.posseYear.id,
      year: props.posseYear.year,
      entranceDate: props.posseYear.entranceDate,
      updatedAt: moment(props.posseYear.updatedAt),
      createdAt: moment(props.posseYear.createdAt),
    }
  }

  get posseYear(): number {
    return this._posseYear.year
  }
}
