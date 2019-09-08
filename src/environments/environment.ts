import { Rotas } from 'src/app/core/model/enum/rotas.enum';

export const environment = {
  production: false,
  NOME_SISTEMA: 'ArcTouch Movie',
  ROTA_INICIO: Rotas.INICIO,
  URL_SERVIDOR: 'http://localhost:8080/challenge',
  URL_SGR_SERVIDOR: 'http://localhost:8080/sgr-rest',
  I18N: 'pt-BR'
};
