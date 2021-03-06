/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import  RepoService  from './repo.service';

@Controller()
export class AppController {
  constructor(private readonly RepoService: RepoService) {}

  @Get()
  async getHello(): Promise <string> {
    return `There are ${ await this.RepoService.messageRepo.count()} existent messages`
  }
}
