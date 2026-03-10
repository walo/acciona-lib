# Estrategia de ramas

## Ramas permanentes

- **main**
  - Solo código estable, etiquetado y listo para producción.
  - Recibe merges desde `develop` (release) y `hotfix/*`.

- **develop**
  - Rama de integración para trabajo en curso.
  - Punto de partida para nuevas funcionalidades.

## Ramas temporales

- **feature/<nombre-corto>**
  - Nacen desde `develop`.
  - Se integran a `develop` mediante PR.
  - Ejemplo: `feature/atomic-design-foundation`.

- **hotfix/<nombre-corto>**
  - Nacen desde `main`.
  - Corrigen incidentes críticos de producción.
  - Se fusionan en `main` y luego en `develop`.

## Convención sugerida de PR

- Título: `type(scope): resumen`
  - `feat`, `fix`, `docs`, `refactor`, `chore`.
- Checklist mínimo:
  - Arquitectura respetada (atomic design).
  - Tokens de diseño reutilizados.
  - Pruebas/lint ejecutados.
