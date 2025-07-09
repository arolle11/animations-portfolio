import { AlignJustify, AlignLeft, Equal, X } from "lucide-react";
const HamburgerMenus = () => {
  return (
    <div className="flex items-center justify-center min-w-[500px] min-h-[500px] bg-gradient-to-r from-[#feac04] to-[#fe4d4a] text-white gap-6 p-8">
      <AlignJustify size={40} />
      <Equal size={40} />
      <AlignLeft size={40} />
      <AlignLeft size={40} />
      <AlignJustify size={40} />
      <AlignJustify size={40} />
      <AlignJustify size={40} />
      <X size={40} />
    </div>
  );
};
export default HamburgerMenus;
