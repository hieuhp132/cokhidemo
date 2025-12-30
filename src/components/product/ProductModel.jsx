import BoltM8 from "../3d/BoltM8";
import ScrewM5 from "../3d/ScrewM5";
import WasherM8 from "../3d/Washer";
import Circlip20 from "../3d/Circlip20";
import ThreadLocker from "../3d/ThreadLocker";
import LubricantOil from "../3d/LubricantOil";
import VernierCaliper from "../3d/VernierCaliper";
import HexKeySet from "../3d/HexKeySet";
import ComboFastener from "../3d/ComboFastener";

export default function ProductModel({ product }) {
  switch (product.id) {
    case "BL-IN-M8-30":
      return <BoltM8 />;
    case "OC-MA-M5-20":
      return <ScrewM5 />;
    case "LD-THEP-M8":
      return <WasherM8 />;
    case "CIR-IN-20":
      return <Circlip20 />;
    case "KEO-LOCK-XANH":
      return <ThreadLocker />;
    case "DAU-BOI-TRON":
      return <LubricantOil />;
    case "TK-VER-150":
      return <VernierCaliper />;
    case "LUC-GIAC-SET":
      return <HexKeySet />;
    case "COMBO-OC-VIT":
      return <ComboFastener />;
    default:
      return null;
  }
}