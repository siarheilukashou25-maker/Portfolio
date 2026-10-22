
# Portfolio - Siarhei Lukashou

Sitio web personal de Siarhei Lukashou, desarrollador de videojuegos en Unity y de aplicaciones multiplataforma. Presenta mi perfil profesional, mis proyectos y mis datos de contacto, y está pensado para empresas y reclutadores.

## Contenido del sitio

- **`index.html` (Inicio):** presentación, experiencia profesional, formación académica, habilidades, idiomas e intereses.
- **`proyectos.html` (Proyectos):**
  - Proyectos destacados: By Me Too!, Screw All y Passenger Delivery.
  - Un playable ad que se puede jugar en el navegador.
  - Una galería con capturas de otros juegos; al hacer clic, cada captura se amplía.
  - Proyectos académicos del ciclo DAM, con enlaces a GitHub.
- **`contacto.html` (Contacto):** formulario que envía los mensajes por email mediante Web3Forms, y otros medios de contacto.

El sitio está disponible en español (idioma por defecto), inglés, ruso y bielorruso. El idioma se elige con las banderas de la cabecera y se recuerda al navegar entre páginas.

## Estructura del repositorio

```text
.
├── index.html                 página de inicio
├── proyectos.html             página de proyectos
├── contacto.html              página de contacto
├── css/
│   └── styles.css             estilos de todo el sitio
├── js/
│   ├── i18n.js                cambio de idioma del sitio (es, en, ru, be) y traducciones
│   ├── contact.js             envío del formulario de contacto con Web3Forms
│   └── gallery.js             ampliación de las capturas en la galería de juegos
├── images/                    foto de perfil, capturas de los juegos e imagen para redes sociales
│   ├── flags/                 banderas del selector de idioma
│   ├── icons/                 iconos de habilidades, contacto y pie de página
│   └── logos/                 logotipos de empresas y centros educativos
├── GameOnCocos/               build web de Cocos Creator del playable ad (se muestra en proyectos.html)
└── README.md                  este archivo
```

`GameOnCocos/` es el build web del juego tal como lo exporta Cocos Creator 3.7 (motor, escenas y recursos). Por eso sus archivos no se editan a mano. El código fuente del juego está en https://github.com/EndiKayfman/TestFreePlay.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Cocos Creator / TypeScript (build del playable ad)
- Web3Forms (envío del formulario de contacto)

## Cómo verlo

Desde la carpeta del repositorio, ejecuta:

```bash
python3 -m http.server 8000
```

Después abre http://localhost:8000 en el navegador.

El juego de Cocos Creator necesita un servidor HTTP y no carga si se abre el archivo con doble clic. En GitHub Pages o en cualquier hosting estático funciona sin configuración adicional.

## Créditos

Banderas: [circle-flags](https://github.com/HatScripts/circle-flags) (licencia MIT).

Iconos: [Devicon](https://devicon.dev/) (MIT), [Simple Icons](https://simpleicons.org/) (CC0) y [Lucide](https://lucide.dev/) (ISC).

Los logotipos de empresas y centros educativos pertenecen a sus respectivos propietarios.

## Autor

Siarhei Lukashou

- Email: siarhei.lukashou.prof@gmail.com
- LinkedIn: [Siarhei Lukashou](https://www.linkedin.com/in/sergei-lukashov/)
- GitHub: [siarheilukashou25-maker](https://github.com/siarheilukashou25-maker)
- Telegram: [Siarhei Lukashou](https://t.me/endi_kayfman)

© 2026 Lukashou Siarhei. Todos los derechos reservados.
