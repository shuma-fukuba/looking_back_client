import {
  Maybe,
  ResponseEntityUuidSchema,
  Entity,
  Uuid,
  TimeStampSchema,
} from './base'
import { PosseYear, ResponsePosseYearSchema } from './posse-year'
import { ResponseTimeStampSchema } from './base';
export interface ResponseUserSchema extends ResponseEntityUuidSchema, ResponseTimeStampSchema {
  username: string
  university: string
  university_entrance_year: string
  expected_university_graduation_year: string
  github_username: Maybe<string>
  github_repository: Maybe<string>

  posse_year: ResponsePosseYearSchema
}

export class User extends Entity<Uuid> implements TimeStampSchema {
  username: string
  university: string
  universityEntranceYear: string
  expectedUniversityGraduationYear: string
  githubUsername: Maybe<string>
  githubRepository: Maybe<string>

  _posseYear: PosseYear

  updatedAt: string

  constructor(props: ResponseUserSchema) {
    super(props)
    this.username = props.username
    this.university = props.university
    this.universityEntranceYear = props.university_entrance_year
    this.expectedUniversityGraduationYear = props.expected_university_graduation_year
    this.githubUsername = props.github_username
    this.githubRepository = props.github_repository

    this._posseYear = new PosseYear(props.posse_year)

    this.updatedAt = props.updated_at
  }

  get posseYear() {
    return this._posseYear.year
  }

  get entranceDate() {
    return this._posseYear.entranceDate
  }
}
