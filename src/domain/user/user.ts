type UserProps = {
  id: string
  name: string
  username: string
}

export class User {
  constructor(
    private readonly props: UserProps
  ) {}
}
