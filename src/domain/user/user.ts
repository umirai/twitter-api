type UserProps = {
  id: string
  name: string
  username: string
}

export class User {
  constructor(
    private readonly props: UserProps
  ) {}

  public get id(): string {
    return this.props.id
  }
}
