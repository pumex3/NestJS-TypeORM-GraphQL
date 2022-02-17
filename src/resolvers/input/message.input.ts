/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql'
import userInput from './user.input'

@InputType()
class MessageUserConnectInput {
  @Field()
  readonly id: number;
}

@InputType()
class  MessageUserInput {
  @Field({nullable: true})
  readonly connect: MessageUserConnectInput;

  @Field({nullable: true})
  readonly create: userInput;
}

@InputType()
export default class  MessageInput {
  @Field()
  readonly content: string;

  @Field()
  readonly user:  MessageUserInput;
}

