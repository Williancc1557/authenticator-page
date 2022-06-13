export interface SignUpDto {
  statusCode: number,
  body: {
    jwt: {
      token: string,
      expiresIn: string
    }
  }
}
