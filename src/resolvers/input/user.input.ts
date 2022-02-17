/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql'

@InputType()
class UserInput {
  @Field()
  readonly email: string;
}
export default UserInput

