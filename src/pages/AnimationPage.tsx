import { MoveLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ButtonAnimation from "../components/animations/ButtonAnimation";
import HamburgerMenus from "../components/animations/HamburgerMenus";
const AnimationPage = () => {
  const { name } = useParams();
  const animations = {
    ButtonAnimation: {
      component: <ButtonAnimation />,
      title: "Button Animation",
      description:
        "A collection of button animations featuring smooth scaling, color transitions, and ripple effects on hover and click.",
      tech: "Tailwind CSS, Framer Motion",
    },
    HamburgerMenus: {
      component: <HamburgerMenus />,
      title: "Hamburger Menu",
      description:
        "creative hamburger menus animation that transforms into a close icon with smooth transitions.",
      tech: "Tailwind CSS, Framer Motion",
    },
  };
  const animation = animations[name];

  return (
    <div className="h-screen flex flex-col bg-white p-4 max-md:p-2 overflow-y-auto">
      <div className="self-start mb-4 pt-8 pl-16">
        <Link to="/" className="text-primary flex items-center gap-2">
          <MoveLeft /> Back to Home
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-2">{animation?.title}</h1>
        <p className="text-center max-w-md text-gray-600 mb-4">
          {animation.description}
        </p>
        <p className="text-sm text-gray-500 mb-6">
          <strong>Built with</strong> {animation.tech}.
        </p>

        <div className="w-full flex items-center justify-center">
          {animation.component}
        </div>
      </div>

      <footer className="mb-8 md:mb-4">
        <div className="text-center text-gray-500 text-sm py-4 text-pretty">
          © 2025 Animations Portfolio - designed by{" "}
          <Link to="https://arollefona.me/" className="text-primary">
            arolle
          </Link>
          . All rights reserved.
        </div>
      </footer>
    </div>
  );
};
export default AnimationPage;
