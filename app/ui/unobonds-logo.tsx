import { useMemo, type CSSProperties } from "react";

export default function UnoBondsLogo( {logoImageLogo,
  logoIconHeight,
  logoIconPosition} : {
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
    <img
      className="max-w-half overflow-hidden h-[170px] object-cover self-stretch"
      alt=""
      src={logoImageLogo}
      style={logoIconStyle}
    />
    </div>
  );
}

