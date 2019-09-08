import * as moment from 'moment';

export function compararHora(hora1, hora2) {
  hora1 = hora1.split(':');
  hora2 = hora2.split(':');
  const d = new Date();

  const data1 = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hora1[0], hora1[1]);
  const data2 = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hora2[0], hora2[1]);

  return data1 > data2;
}

export function montarData(data: Date, hora: string): Date {
  const newData: moment.Moment = moment(data, 'DD/MM/YYYY');
  const newHora = moment(hora, 'HH:mm');
  if (newHora.isValid) {
    newData.set({ hour: newHora.hour(), minute: newHora.minute() });
  }
  return newData.toDate();
}

export function montarDataEHora(data: Date, hora: string): string {
  const newData: moment.Moment = moment(data, 'DD/MM/YYYY');
  return newData.format('DD/MM/YYYY') + (hora ? ' ' + hora : '');
}

