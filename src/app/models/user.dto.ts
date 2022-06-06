export interface UserDto {
  statusCode: number,
  body: {
    id: number,
    password: string,
    contact: {
      id: number,
      email: string,
      verifyEmail: {
        id: number,
        isVerified: boolean,
        confirmationToken: number
      }
    }
  }
}


export interface UserParamsDto {
  email: string,
  password: string
}
