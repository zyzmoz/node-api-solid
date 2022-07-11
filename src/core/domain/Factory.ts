export abstract class Factory<D, R> {
  public data: D;
  public repository: R;

  constructor(data: D, repository: R) {
    this.data = data;
    this.repository = repository;
  }
}
