import { UserDto } from 'src/app/models/user.dto';

export interface GetUserDto {
  statusCode: number,
  body: UserDto
}
