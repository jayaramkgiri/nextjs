import { useMemo, type CSSProperties } from "react";
import { Image } from "@nextui-org/react";

export default function UnoBondsLogo({ logoImageLogo,
  logoIconHeight,
  logoIconPosition }: {
    logoImageLogo?: string;

    /** Style props */
    logoIconHeight?: CSSProperties["height"];
    logoIconPosition?: CSSProperties["position"];
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
        className="max-w-half overflow-hidden h-2 object-contain self-stretch"
        alt=""
        src={logoImageLogo}
        style={logoIconStyle}
      />
    </div>
  );
}

