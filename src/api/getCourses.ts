import { Course } from '@/interfaces/Course';
import axios from './axios';
import { AxiosResponse } from 'axios';

export const getCourses = async (): Promise<AxiosResponse<Course[]>> => await axios.get('/cursos');
