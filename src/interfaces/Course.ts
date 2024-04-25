export interface Course {
    nombre: string,
    categoria: string[],
    descripcion: string,
    cantidadAlumnos: number,
    inicio: number,
    fin: number,
    precio: number,
    alumnos: any[],
    id: string
}