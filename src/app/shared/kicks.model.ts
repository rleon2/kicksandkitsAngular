export class Kicks{
    public name: string;
    public description: string; 
    public color: string;
    public imagePath: string;
    public cost: number;

    constructor(name:string, desc:string, color:string, imagePath:string, cost:number){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.color = color;
        this.cost = cost;
    }
}