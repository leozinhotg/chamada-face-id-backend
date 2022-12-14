export class PresenceResponse{
    code: number;
}

export class TurmaResponse{
    turmas: Array<Turma> = new Array<Turma>();
}

export interface Turma{
    id: string;
    name: string;
    semestre: string;
    sala: string;
    professor: string;
}

export class StudentsResponse{
    class: Array<ClassStudents> = new Array<ClassStudents>();
}

export class ClassStudents{
    idClass: string;
    students: Array<Student> = new Array<Student>();
}

export interface Student{
    registration: string;
    name: string;
    photo: string;
}