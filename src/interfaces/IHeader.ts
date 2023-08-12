import { IServices } from './IPageInformations';

export interface ICategoriesHeader {
  id: number;
  link: string;
  href?: string;
  categorias?: IServices[];
  logo?: string;
}
