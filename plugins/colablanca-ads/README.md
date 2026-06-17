# colablanca-ads

Plugin local de Claude Code con herramientas de publicidad y growth para **COLABLANCA PLAZA** (Tegucigalpa). Equivalente a un plugin de "ads", pero a la medida del proyecto y versionado en este repo, así funciona igual en Claude Code on the web y en local.

## Qué incluye

| Comando | Qué hace |
| --- | --- |
| `/anuncio` | Genera copy de anuncios brand-aware (Meta, Google, TikTok) usando el contenido real del sitio. |
| `/landing-campana` | Crea una landing page de campaña dentro del sitio Next.js (`/c/<slug>`), reutilizando el sistema de diseño. |
| `/roas` | Analiza campañas de Meta Ads y recomienda decisiones para maximizar el ROAS. Solo lectura. |
| `/publicar-meta` | Crea/actualiza campañas, ad sets y anuncios en Meta Ads, siempre en PAUSED y con confirmación. |

Además:
- **Subagente `estratega-ads`** — análisis profundo de cuentas y planes de campaña multi-servicio.
- **Hook `SessionStart`** — prepara el entorno (`npm ci` en `colablancasite/` si faltan dependencias).

> Los comandos de Meta Ads (`/roas`, `/publicar-meta`) requieren que la conexión MCP de **Meta** esté disponible en la sesión.

## Cómo instalarlo

### En Claude Code local (terminal / desktop / IDE)

Desde la raíz del repo:

```
/plugin marketplace add .
/plugin install colablanca-ads@colablanca-ads
```

(También funciona apuntando al repo remoto: `/plugin marketplace add gilmarruiznarvaez/png`.)

### En Claude Code on the web

El comando `/plugin` no está disponible en la web, pero como el plugin vive en el repo, puedes invocar sus comandos y subagentes directamente una vez que estén en la rama de trabajo. El hook `SessionStart` se activa al cargar la configuración del proyecto.

## Estructura

```
.claude-plugin/marketplace.json        # marketplace local que lista el plugin
plugins/colablanca-ads/
  .claude-plugin/plugin.json           # manifiesto del plugin
  commands/                            # /anuncio /landing-campana /roas /publicar-meta
  agents/estratega-ads.md              # subagente de estrategia de medios
  hooks/hooks.json                     # SessionStart -> scripts/setup.sh
  scripts/setup.sh                     # preparación idempotente del entorno
```

## Seguridad

`/publicar-meta` opera sobre una cuenta publicitaria real: crea todo en estado **PAUSED**, pide confirmación antes de cualquier gasto y solo activa campañas con un "sí" explícito.
