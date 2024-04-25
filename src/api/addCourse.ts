import { Course } from '@/interfaces/Course';
import axios from './axios';
import { AxiosResponse } from 'axios';

export const AddCourse = async (course: Course): Promise<AxiosResponse<Course>> => {
    const inicioSegundos = new Date(course.inicio).getTime() / 1000;
    const finSegundos = new Date(course.fin).getTime() / 1000;

    return await axios.post('/cursos', {
        ...course,
        inicio: inicioSegundos,
        fin: finSegundos
    });
};
