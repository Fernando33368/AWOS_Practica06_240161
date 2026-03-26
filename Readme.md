# Consumo de APIs para Plataformas Online

## El objetivo de la practica es: 

<p align="Justify">
    Desarrollar una aplicación web que consuma APIs reales de:
</p>

* Pagos (Stripe)
* AI Generativa (OpenAI)
* Planeación (Google Calendar)

---

### Tecnologias a utilizar: 

* Node.js + express
* Tailwind CSS 3.x (UI Moderna)
* Passport.js (OAuth)
* Stripe API
* OpenAI API
* Google Calendar API

---

### Funcionalidades de cada API

* Simulación de pagos con Stripe
* Generación de texto con IA
* Consultar y crear eventos en Google Calendar
* Autenticación con Google
* Interfaz Moderna

---

# Endpoints

## Stripe (20)

| # | Endpoint | Método |
|--|--------|--------|
| 1 | /v1/checkout/sessions | POST |
| 2 | /v1/payment_intents | POST |
| 3 | /v1/payment_intents/:id | GET |
| 4 | /v1/payment_intents/:id/confirm | POST |
| 5 | /v1/payment_intents/:id/cancel | POST |
| 6 | /v1/customers | POST |
| 7 | /v1/customers/:id | GET |
| 8 | /v1/customers/:id | DELETE |
| 9 | /v1/refunds | POST |
| 10 | /v1/refunds/:id | GET |
| 11 | /v1/products | GET |
| 12 | /v1/products | POST |
| 13 | /v1/prices | POST |
| 14 | /v1/prices/:id | GET |
| 15 | /v1/charges | POST |
| 16 | /v1/charges/:id | GET |
| 17 | /v1/payment_methods | GET |
| 18 | /v1/payment_methods/:id | GET |
| 19 | /v1/setup_intents | POST |
| 20 | /v1/balance | GET |

---

## OpenAI (20)

| # | Endpoint | Método |
|--|--------|--------|
| 1 | /v1/responses | POST |
| 2 | /v1/models | GET |
| 3 | /v1/models/:id | GET |
| 4 | /v1/embeddings | POST |
| 5 | /v1/images | POST |
| 6 | /v1/files | GET |
| 7 | /v1/files | POST |
| 8 | /v1/files/:id | DELETE |
| 9 | /v1/fine_tuning/jobs | POST |
| 10 | /v1/fine_tuning/jobs | GET |
| 11 | /v1/fine_tuning/jobs/:id | GET |
| 12 | /v1/audio/transcriptions | POST |
| 13 | /v1/audio/speech | POST |
| 14 | /v1/batches | POST |
| 15 | /v1/batches/:id | GET |
| 16 | /v1/vector_stores | POST |
| 17 | /v1/vector_stores/:id | GET |
| 18 | /v1/assistants | POST |
| 19 | /v1/assistants/:id | GET |
| 20 | /v1/threads | POST |

---

## Google Calendar (20)

| # | Endpoint | Método |
|--|--------|--------|
| 1 | /calendar/v3/calendars | GET |
| 2 | /calendar/v3/users/me/calendarList | GET |
| 3 | /calendar/v3/calendars/:id | GET |
| 4 | /calendar/v3/calendars/:id | PUT |
| 5 | /calendar/v3/events | GET |
| 6 | /calendar/v3/events | POST |
| 7 | /calendar/v3/events/:id | GET |
| 8 | /calendar/v3/events/:id | PUT |
| 9 | /calendar/v3/events/:id | DELETE |
| 10 | /calendar/v3/events/instances | GET |
| 11 | /calendar/v3/freeBusy | POST |
| 12 | /calendar/v3/colors | GET |
| 13 | /calendar/v3/settings | GET |
| 14 | /calendar/v3/settings/:id | GET |
| 15 | /calendar/v3/acl | GET |
| 16 | /calendar/v3/acl/:id | GET |
| 17 | /calendar/v3/events/watch | POST |
| 18 | /calendar/v3/calendars/watch | POST |
| 19 | /calendar/v3/events/move | POST |
| 20 | /calendar/v3/channels/stop | POST |

---

# Pruebas del sistema

## Prueba 1: Vista Principal
<img src="" width="400px" height="200">

## Prueba 2: Pago con Stripe
<img src="" width="400" height="200">

## Prueba 3: AI
<img src="" width="400" height="200">

## Prueba 4: 
<img src="" width="400" height="200">

## Prueba 5:
<img src="" width="400" height="200">

---

# Fases del Proyecto

| Ramas | Descripción | Estatus |
|------|------------|--------|
| *1* | Configuración inicial (Node + Express) | ✅ Terminado |
| *2* | Configuración Tailwind (UI Moderna) | ✅ Terminado |
| *3* | Middlewares y servidor | ✅ Terminado |
| *4* | Integración APIs (Stripe, IA, Google) | ✅ Terminado |
| *5* | Desarrollo de vistas | ✅ Terminado |
| *6* | Sistema de autenticación | ✅ Terminado |
| *7* | Integración completa | ✅ Terminado |
| *8* | Pruebas y documentación | En proceso |