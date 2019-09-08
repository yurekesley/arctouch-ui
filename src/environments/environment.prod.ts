import { Rotas } from 'src/app/core/model/enum/rotas.enum';

export const environment = {
  production: true,
  NOME_SISTEMA: 'SMT',
  ROTA_INICIO: Rotas.INICIO,
  URL_SERVIDOR: '/smt-rest',
  URL_SGR_SERVIDOR: '/sgr-rest',
  I18N: 'pt-BR'
};
