import { UserDto } from 'src/app/models/user.dto';
export interface SignInDto {
  statusCode: number,
  body: {
    jwt: {
      token: string,
      expiresIn: string
    }
    user: UserDto
  }
}
