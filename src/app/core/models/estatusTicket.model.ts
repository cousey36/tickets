export class EstatusTicket {
    constructor(id: number, descripcion: string) {
        this.Id = id;
        this.Descripcion = descripcion;
    }
    Id: number = 0;
    Descripcion: string = '';
}