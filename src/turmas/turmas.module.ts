import { Module } from '@nestjs/common';
import { PresenceController, StudentController, TurmasController } from './turmas.controller';
import { TurmasService } from './turmas.service';

@Module({
  controllers: [TurmasController, StudentController, PresenceController],
  providers: [TurmasService]
})
export class TurmasModule {}
