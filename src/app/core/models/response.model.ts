export class GenericResponse<T> {
    IsValid: boolean = false;
    Message: string = '';
    Model?: T;
}