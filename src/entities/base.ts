import moment from 'moment'

export interface ResponseTimeStampSchema {
  updated_at: string
  created_at: string
}

export interface TimeStampSchema {
  updatedAt: moment.Moment
  createdAt: moment.Moment
}

export type Id = number
export type Uuid = string

export interface ResponseEntityIdSchema {
  id: number
}

export interface ResponseEntityUuidSchema {
  uuid: string
}

export interface EntitySchema<T> {
  id: T
}

export abstract class Entity<T> implements EntitySchema<T> {
  id: T
  constructor(
    props: EntitySchema<T> | ResponseEntityIdSchema | ResponseEntityUuidSchema
  ) {
    this.id = ((props as EntitySchema<T>).id ||
      (props as ResponseEntityIdSchema).id ||
      (props as ResponseEntityUuidSchema).uuid) as T
  }
}

export type Optional<T> = T | undefined
