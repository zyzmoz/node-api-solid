import { v4 as uuid } from 'uuid';

export abstract class Entity<T> {
  protected _id: string;
  public props: T;

  public get id() : string {
    return this._id
  }  

  constructor(props: T, id?: string) {
    this._id = id ?? uuid();
    this.props = props;
  }
}