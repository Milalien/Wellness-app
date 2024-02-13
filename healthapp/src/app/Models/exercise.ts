export class Exercise {
    type: String;
    name: String;
    sets: number;
    reps: number;
    weight: number;
    time: number;

    constructor(type: String, name: String, sets: number, reps?: number, weight?: number, time?: number) {
        this.type = type;
        this.name = name;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
        this.time = time;
    }
}
export class Program {

    name: String;
    prog: Exercise[];

    constructor(name: String, prog: Exercise[]) {
        this.name = name;
        this.prog = prog;
    }
}