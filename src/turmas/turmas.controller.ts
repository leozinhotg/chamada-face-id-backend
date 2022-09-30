import { Controller, Get, Param, Post } from '@nestjs/common';
import { ClassStudents, PresenceResponse, TurmaResponse } from './interface/turmas.interface';
import { TurmasService } from './turmas.service';

@Controller('turmas')
export class TurmasController {
    constructor(
        private turmasService: TurmasService
    ) {}

    @Get()
    listTurma(): TurmaResponse{
        return this.turmasService.turmasMock;
    }
}

@Controller('students')
export class StudentController {
    constructor(
        private turmasService: TurmasService
    ) {}

    @Get(':id')
    listStudents(@Param('id') id: string): ClassStudents{
        const students = this.turmasService.studentsMock;
        const findIndex = students.class.findIndex(element => element.idClass === id);
        return students.class[findIndex];
    }
}

@Controller('presence')
export class PresenceController {
    constructor(
        private turmasService: TurmasService
    ) {}

    private readonly CODE_CONFIRM_PRESENCE = 100;
    private readonly CODE_NO_CONFIRM_PRESENCE = 200;

    @Get(':matricula')
    markPresence(@Param('matricula') matricula: string): PresenceResponse{
        let response = new PresenceResponse();
        if(!this.turmasService.presence.includes(matricula)){
            this.turmasService.presence.push(matricula);
            response.code = this.CODE_CONFIRM_PRESENCE;
            return response;
        }
        else{
            response.code = this.CODE_NO_CONFIRM_PRESENCE;
            return response;
        }
    }
}
