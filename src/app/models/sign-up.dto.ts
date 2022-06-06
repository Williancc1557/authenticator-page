export interface SignUpDto {
  statusCode: number,
  body: {
    token: string,
    expiresIn: string
  }
}
