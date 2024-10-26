class Boards {
    public id: string;
    public name: string;
    public description: string;
    public createdAt: string;

    constructor(name: string, description: string = '') {
        this.id = Math.random().toString(16);
        this.name = name;
        this.description = description;
        this.createdAt = new Date().toJSON().slice(0, 10);
    }
}

export default Boards;