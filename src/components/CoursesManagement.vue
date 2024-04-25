<template>
    <main>
        <h1>Gestión de Cursos</h1>
        <div class="buttons">
            <div class="buttons-container">
                <router-link to="/addCourse">
                    <v-btn>
                        Agregar Curso
                    </v-btn>
                </router-link>
            </div>
        </div>
        <section class="courses">
            <v-expansion-panels panel multiple>
                <v-expansion-panel v-for="(course, index) in courses" :key="index">
                    <v-expansion-panel-title>
                        <section class="course-container">
                            <article>
                                {{ course.nombre }}
                            </article>
                        </section>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <article class="edit-btn">
                            <v-btn>
                                Editar Curso
                            </v-btn>
                        </article>
                    </v-expansion-panel-text>
                    <v-expansion-panel-text>
                        Descripción: {{ course.descripcion }}
                        <hr>
                    </v-expansion-panel-text>
                    <v-expansion-panel-text>
                        Precio: {{ course.precio }}
                        <hr>
                    </v-expansion-panel-text>
                    <v-expansion-panel-text>
                        Categoría: {{ course.categoria }}
                        <hr>
                    </v-expansion-panel-text>
                    <v-expansion-panel-text>
                        Cantidad de Alumnos: {{ course.cantidadAlumnos }}
                        <hr>
                    </v-expansion-panel-text>
                    <v-expansion-panel-text>
                        Fecha Inicio: {{ course.inicio }}
                        <hr>
                    </v-expansion-panel-text>
                    <v-expansion-panel-text>
                        Fecha Fin: {{ course.fin }}
                        <hr>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Course } from '@/interfaces/Course';
import { getCourses } from '@/api/getCourses';


export default defineComponent({
    data() {
        return {
            courses: {} as Course[]
        };
    },
    methods: {
        async chargeCourses() {
            const res = await getCourses();
            this.courses = res.data;
        }
    },
    mounted() {
        this.chargeCourses()
    }
})
</script>

<style scoped>
h1 {
    margin-bottom: 3rem;
}

.buttons {
    width: 50vw;
    margin: 0 auto;
    display: flex;
    justify-content: start;
    align-content: center;
    padding: 0 auto;
    margin-bottom: 3rem;
}

.course-container {
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.buttons-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
}

.courses {
    font-family: monospace;
    width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.edit-btn {
    display: flex;
    justify-content: start;
}
</style>