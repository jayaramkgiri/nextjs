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
    <img
      className="max-w-full overflow-hidden h-[170px] object-cover self-stretch"
      alt=""
      src={logoImageLogo}
      style={logoIconStyle}
    />
  );
}



// import type { NextPage } from "next";
// import { useMemo, type CSSProperties } from "react";

// export type LogoImageType = {
//   logoImageLogo?: string;

//   /** Style props */
//   logoIconHeight?: CSSProperties["height"];
//   logoIconPosition?: CSSProperties["position"];
// };

// const LogoImage: NextPage<LogoImageType> = ({
//   logoImageLogo,
//   logoIconHeight,
//   logoIconPosition,
// }) => {
//   const logoIconStyle: CSSProperties = useMemo(() => {
//     return {
//       height: logoIconHeight,
//       position: logoIconPosition,
//     };
//   }, [logoIconHeight, logoIconPosition]);

//   return (
//     <img
//       className="max-w-full overflow-hidden h-[170px] object-cover self-stretch"
//       alt=""
//       src={logoImageLogo}
//       style={logoIconStyle}
//     />
//   );
// };

// export default LogoImage;
