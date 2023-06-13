import Link from 'next/link';
import {
  PinIcon,
  WhattsAppIcon,
  EmailEmptyIcon,
  FacebookNoBgIcon,
  InstagramEmptyIcon,
  InstagramIcon,
  FacebookIcon,
  EmailIcon,
  YouTubeIcon,
} from 'components/icons';

import {
  apiWhattsApp,
  emailLink,
  facebookLink,
  googleMapsLink,
  instagramLink,
  youtubeLink,
} from 'src/services/social-links';
import { WhattsAppInvIcon } from 'components/icons/Whattsapp';

import * as S from './styles';

interface IBoxSocials {
  hasBg?: string;
  svgColor?: string;
  noWhattsapp?: boolean;
  noFacebook?: boolean;
  noInstagram?: boolean;
  noEmail?: boolean;
  noMaps?: boolean;
  noYoutube?: boolean;
  isEmptyIcon?: boolean;
  svgWidth?: string;
}

export function BoxSocials({
  noMaps,
  noEmail,
  hasBg,
  svgWidth,
  svgColor,
  noYoutube,
  noFacebook,
  noWhattsapp,
  noInstagram,
  isEmptyIcon,
}: IBoxSocials) {
  return (
    <S.BoxSocials
      className="box-socials"
      $hasBg={hasBg}
      $svgColor={svgColor}
      $svgWidth={svgWidth}
    >
      {!noInstagram && (
        <Link
          href={instagramLink}
          target="_blank"
          rel="external"
          className="link-redes"
        >
          {isEmptyIcon ? <InstagramEmptyIcon /> : <InstagramIcon />}
        </Link>
      )}

      {!noFacebook && (
        <Link
          href={facebookLink}
          target="_blank"
          rel="external"
          className="link-redes"
        >
          {isEmptyIcon ? <FacebookNoBgIcon /> : <FacebookIcon />}
        </Link>
      )}

      {!noWhattsapp && (
        <Link
          href={apiWhattsApp}
          target="_blank"
          rel="external"
          className="link-redes"
        >
          {isEmptyIcon ? <WhattsAppIcon /> : <WhattsAppInvIcon />}
        </Link>
      )}

      {!noEmail && (
        <Link
          href={emailLink}
          target="_blank"
          rel="external"
          className="link-redes"
        >
          {isEmptyIcon ? <EmailEmptyIcon /> : <EmailIcon />}
        </Link>
      )}

      {!noMaps && (
        <Link
          href={googleMapsLink}
          target="_blank"
          rel="external"
          className="link-redes"
        >
          <PinIcon />
        </Link>
      )}

      {!noYoutube && (
        <Link
          href={youtubeLink}
          target="_blank"
          rel="external"
          className="link-redes"
        >
          <YouTubeIcon />
        </Link>
      )}
    </S.BoxSocials>
  );
}
