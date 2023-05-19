import useSWR from 'swr';

import { api } from 'src/services/api';
import { IPageInformations } from 'src/interfaces/pageInformations';

export function linksSections() {
  const fetcherLinks = () => api.get<IPageInformations>(`pages/home`);

  const swrLinks = useSWR(`pages/home`, fetcherLinks, {
    revalidateIfStale: true,
    revalidateOnFocus: false,
    shouldRetryOnError: false,
    revalidateOnReconnect: false,
  });

  return swrLinks.data;
}
