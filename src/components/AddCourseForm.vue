<template>
    <form @submit.prevent="saveCourse()">
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre" v-model="course.nombre"><br>

        <label for="categoria">Categoría:</label><br>
        <select id="categoria" name="categoria" v-model="course.categoria">
            <option value="">Selecciona una categoría...</option>
            <option value="literatura">Informática</option>
            <option value="literatura">Informática 2</option>
            <option value="literatura">Diseño</option>
            <option value="literatura">Idiomas</option>
            <option value="matematicas">Matemáticas</option>
            <option value="ciencias">Ciencias</option>
            <option value="historia">Historia</option>
            <option value="literatura">Literatura</option>
        </select><br>

        <label for="descripcion">Descripción:</label><br>
        <textarea id="descripcion" name="descripcion" v-model="course.descripcion"></textarea><br>

        <label for="cantidadAlumnos">Cantidad de Alumnos:</label><br>
        <input type="number" id="cantidadAlumnos" name="cantidadAlumnos" v-model="course.cantidadAlumnos"><br>

        <label for="inicio">Fecha de Inicio:</label><br>
        <input type="date" id="fecha" name="fecha" v-model="course.inicio"><br>

        <label for="fin">Fin del Curso:</label><br>
        <input type="date" id="fecha" name="fecha" v-model="course.fin"><br>

        <label for="precio">Precio:</label><br>
        <input type="number" id="precio" name="precio" v-model="course.precio"><br>

        <label for="id">ID:</label><br>
        <input type="text" id="id" name="id" v-model="course.id"><br>

        <input type="submit" value="Añadir Curso">
    </form>
</template>

<script lang="ts">
import { AddCourse } from "@/api/addCourse";
import { Course } from "@/interfaces/Course";
import { defineComponent } from "vue";


export default defineComponent({
    data() {
        return {
            course: {} as Course,
        };
    },
    methods: {
        async getCourse() {
            
        },
        async saveCourse() {
            try {
                const res = await AddCourse(this.course);
                console.log(res);
                this.$router.push('/courses');
            } catch (error) {
                console.error(error);
            }
        },
    },
});
</script>


<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    padding: 20px;
}

form {
    background-color: #fff;
    max-width: 50vw;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="number"],
textarea,
input[type="date"],
select {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type="submit"] {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #0056b3;
}
</style>