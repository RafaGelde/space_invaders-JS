# Space Invaders — Projeto de Estudo

Projeto criado seguindo o passo a passo do guia "Manual do Dev" para aprender e praticar JavaScript.

Descrição
- Clone simples de Space Invaders desenvolvido como exercício. O objetivo foi seguir o tutorial do Manual do Dev e entender conceitos como: canvas, game loop, detecção de colisões, gestão de entidades (invaders, projéteis, partículas) e entrada do usuário.

Como executar
- Abra `index.html` no navegador (modo desenvolvedor recomendado).
- Ou rode um servidor local (opcional):

```bash
# instalado o http-server globalmente
npx http-server .
```

Estrutura do projeto
- `index.html` — página principal que referencia `src/script.js`.
- `src/script.js` — lógica principal do jogo (game loop, eventos, UI, integração das classes).
- `src/style.css` — estilos básicos e telas (start, game over, scoreboard).
- `src/classes/` — classes do jogo:
  - `Player.js`, `Invader.js`, `Projectile.js`, `Grid.js`, `Particle.js`, `Obstacle.js`, `SoundEffects.js`.
- `src/utils/constants.js` — constantes do projeto (paths, estados, frames inicial).
- `src/assets/` — imagens e áudios usados pelo jogo.

Funcionalidades
- Pláyer controlável com `A`/`D` e `Enter` para atirar.
- Inimigos organizados em uma grade (`Grid`) que se movem e descem.
- Sistema de pontuação, nível e recorde (UI no topo).
- Obstáculos e partículas de explosão.

Notas do desenvolvimento
- Este projeto foi usado como ambiente de aprendizagem; muitos trechos seguem literalmente o passo a passo do guia.
- Código escrito em módulos ES (`type="module"`), portanto rode via servidor ou abra o `index.html` direto em navegadores modernos.

Créditos
- Baseado no tutorial/manual "Manual do Dev".