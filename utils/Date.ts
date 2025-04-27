// utils/date.ts
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatDate = (fecha: number): string => {
  return format(new Date(fecha), 'MMMM d, yyyy', {locale:es});
};