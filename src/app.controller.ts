import { Controller, Get,Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response} from 'express'
import {join} from 'path';
@Controller('songs')
export class SongsController {
 

  @Get()
    getSongs(@Res() res: Response) {
      const jsonFilePath = join (__dirname, '../data/songs.json');
      res.sendFile(jsonFilePath);
    }
  
  
  
  }

