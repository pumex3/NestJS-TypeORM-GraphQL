/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import User from '../../db/models/user.entity'
import repoService from'../../repo.service'
import UserInput from './user.input'

@Resolver()
export default class UserResolver {
   constructor(private readonly repoService: repoService) {}

  @Query(() => [User])
  public async getUsers(): Promise<User[]> {
    return this.repoService.userRepo.find();
  }
  @Query(() => User, {nullable: true})
  public async getUser(@Args('id') id: number): Promise<User> {
    return  this.repoService.userRepo.findOne(id);
  }

  @Mutation(() => User)
  public async createUser(@Args('data') input: UserInput): 
    Promise<User> {
      const author = this.repoService.userRepo.create
      ({email:input.email});
      return  this.repoService.userRepo.save(author);
  }
}
