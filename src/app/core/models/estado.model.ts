export class Estado {
    constructor(id: number, idPais: number, nombre: string) {
        this.Id = id;
        this.IdPais = idPais;
        this.Nombre = nombre;
    }
    Id: number = 0;
    IdPais: number = 0;
    Nombre: string = '';
}