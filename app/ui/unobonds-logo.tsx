import { useMemo, type CSSProperties } from 'react';
import { Image } from '@nextui-org/react';

export default function UnoBondsLogo({
  logoImageLogo,
  logoIconHeight,
  logoIconPosition,
}: {
  logoImageLogo?: string;

  /** Style props */
  logoIconHeight?: CSSProperties['height'];
  logoIconPosition?: CSSProperties['position'];
}) {
  const logoIconStyle: CSSProperties = useMemo(() => {
    return {
      height: logoIconHeight,
      position: logoIconPosition,
    };
  }, [logoIconHeight, logoIconPosition]);
  return (
    <div className="flex flex-row leading-none text-white">
      <Image
        className="max-w-half h-2 w-full self-stretch overflow-hidden object-contain"
        alt=""
        src={logoImageLogo}
        style={logoIconStyle}
      />
    </div>
  );
}
