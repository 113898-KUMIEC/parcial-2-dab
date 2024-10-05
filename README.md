# MoviesApp - Segundo Parcial

Se desarrollará una aplicación que liste, cree y edite películas.

El endpoint para acceder al BackEnd es: `https://nodejs-sls-movies-api.vercel.app/`

## Se pide...

1. Implementar routing
2. Mostrar un listado de películas obtenidas de la API
3. Agregar una película (se accede desde la pantalla del listado por medio de un botón)
   - Mostrar cada actor en una fila diferente 
      - Solo mostrar el botón de agregar en el último actor (se debe agregar al último)
      - Permitir borrar un actor desde un boton
4. Validaciones
   - Título (propiedad title): Mínimo 5 Caracteres, Requerido, no puede estár duplicado.
   - Año (propiedad year): Mínimo 1900, Máximo 2023
   - Extracto (propiedad extract): Mínimo 15 Caracteres, Requerido
   - Actores (listado de actores, propiedad cast):
      - Nombre: Requerido, Mínimo 5 Caracteres
      - Apellido: Requerido, Máximo 20 Caracteres
   - Link (propiedad href): Se debe validar que la separación entre palabras sea por medio de guiones bajos (__) en vez de por espacios y todo en mayusculas, ejemplo: Lord of the Rings debería ser LORD_OF_THE_RINGS para ser un campo válido.
5. Darle los estilos correspondientes de las validaciones en los controles (mensajes y bordes de los controles afectados en color rojo) y mostrar las validaciones especificas de cada control.

Nota: Se deben generar los modelo/s (interfaces/clases) y servicio/s necesarios para resolver el dominio propuesto.
- Routing: (1)
- Listado + Http (2)
- Formulario + Http (3)
- Validaciones (2)
- Validación Personalizada (1)
- Estilos (1)

## Documentación BackEnd

### GET Movies
`GET https://nodejs-sls-movies-api.vercel.app/api/movies`

### GET Movie by Title
`GET https://nodejs-sls-movies-api.vercel.app/api/movies?title=Lethal%20Weapon%202`

### POST Movies (Agregar una nueva Película)
`POST https://nodejs-sls-movies-api.vercel.app/api/movies`

``` JSON
{
    "href": "lethal_weapon",
    "title": "Lethal Weapon 1",
    "year": 1987,
    "cast": [
        "Mel Gibson",
        "Danny Glover"
    ],
    "genres": [
        "Action",
        "Crime",
        "Suspense"
    ],
    "extract": "Dos policías completamente opuestos deben dejar de lado sus diferencias para atrapar a una pandilla de traficantes de drogas.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
    "thumbnailWidth": 220,
    "thumbnailHeight": 326
}
```

### PUT Movies (Editar una existente)
`PUT https://nodejs-sls-movies-api.vercel.app/api/movies?id=555cbab0-7e0b-4e1c-8ab6-1c8f66f19c64`

``` JSON
{
    "id": "555cbab0-7e0b-4e1c-8ab6-1c8f66f19c64",
    "href": "The_Grudge_(2020_film)",
    "title": "Lethal Weapon 1",
    "year": 2020,
    "cast": [
        "Andrea Riseborough",
        "Demián Bichir"
    ],
    "genres": [
        "Horror",
        "Supernatural",
        "Sci-Fi"
    ],
    "extract": "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
    "thumbnailWidth": 220,
    "thumbnailHeight": 326
}
```