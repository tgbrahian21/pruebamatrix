# Contact Form API

API REST para la gestión de formularios de contacto, desarrollada con NestJS y PostgreSQL como prueba técnica para Metrix AL.

## 🚀 Tecnologías usadas

- NestJS
- TypeORM
- PostgreSQL
- Nodemailer
- Docker / Docker Compose
- @nestjs/config
- class-validator

## ⚙ Configuración

### 1. Clonar repositorio

bash
git clone https://github.com/tu-usuario/contact-form-api.git
cd contact-form-api



### 2. Instalar dependencias 
bash
npm install

### 3. Configurar entorno

properties
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=user
DB_PASSWORD=password
DB_DATABASE=contact_db

MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=your_mailtrap_user
MAIL_PASSWORD=your_mailtrap_password
ADMIN_EMAIL=admin@example.com


### 4. Ejecutar en local
bash
npm run start:dev


### 5. Ejecutar con Docker
bash
docker-compose up --build


## 📮 Endpoints disponibles

### 1. POST /api/contact-submissions

Recibe datos del formulario y envia correos

#### Cuerpo esperado:

json
{
  "fullName": "Juan Pérez",
  "email": "juan@example.com",
  "country": "Colombia", // opcional
  "phone": "+573001234567", // opcional
  "message": "Estoy interesado en sus servicios."
}


#### Respuesta exitosa
json
{
  "message": "Formulario recibido correctamente"
}


### 2. GET /api/metrics/daily-submissions

Devuelve el conteo de envios del día.

#### Respuesta exitosa:
json
{
  "conteo": 5
}


## 🧠 Preguntas de Razonamiento
### 1. Arquitectura y diseño

  - ¿Por qué NestJS? NestJS provee arquitectura modular, inyección de dependencias y facilidad de escalabilidad.

  - Estructura:
      - `contact-submissions/`
      - `metrics/`
      - `config`

    Diseño de base de datos simple, optimizado para consultas por fecha.

### 2. Escalabilidad y Mejoras
  - Cuellos de botella:
    - Envío masivo de correos.
    - Gran volumen de registros sin índices

  - Soluciones:
    - Implementar colas de mensajes (Bull + Redis).
    - Indexar campo created_at.
    - Escalamiento horizontal. 

### 3. Alternativas y Trade-offs
  - Validaciones: `class-validator` fue preferido sobre joi por integración natural en NestJS.

  - Base de datos: `PostgreSQL` por su robustez para proyectos futuros.

  - Emails: `Nodemailer` por simplicidad, aunque servicios como SendGrid serían ideales en producción.

### 4. Endpoint de Métricas
  - implementación: Uso de Between de TypeORM entre inicio y fin de día.

  - Eficiencia: Eficiente en pequeño volumen. Requiere índices en alta concurrencia.

  - Extensión: Filtros por country o date range agregando query params y ajustando consulta.

## 📬 Contacto
- Desarrollador: Brahian Stid Rojas Castillo
- Email: brahianstid02@gmail.com 