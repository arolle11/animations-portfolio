import { MoveLeft } from "lucide-react";
import type { JSX } from "react";
import { Link, useParams } from "react-router-dom";
import ButtonAnimation from "../components/animations/ButtonAnimation";
import CardFlip from "../components/animations/CardFlip";
import HamburgerMenus from "../components/animations/HamburgerMenus";
import SearchAnimation from "../components/animations/SearchAnimation";
import SocialShare from "../components/animations/SocialShare";

type AnimationType = {
  component: JSX.Element;
  title: string;
  description: string;
  tech: string;
};

type AnimationsType = {
  [key: string]: AnimationType;
};

const AnimationPage = () => {
  const { name } = useParams();

  const animations: AnimationsType = {
    ButtonAnimation: {
      component: <ButtonAnimation />,
      title: "Button Animations",
      description:
        "A collection of button animations featuring smooth scaling, color transitions, and ripple effects on hover and click.",
      tech: "Tailwind CSS, Framer Motion",
    },
    HamburgerMenus: {
      component: <HamburgerMenus />,
      title: "Hamburger Menus",
      description:
        "Creative hamburger menus animation that transforms into a close icon with smooth transitions.",
      tech: "Tailwind CSS, Framer Motion",
    },
    CardFlip: {
      component: <CardFlip />,
      title: "Card Flip",
      description: "A card flip animation that flips the card when clicked.",
      tech: "Tailwind CSS, Framer Motion",
    },
    SocialShare: {
      component: <SocialShare />,
      title: "Social Share",
      description:
        "A social share animation that shares the current page on social media.",
      tech: "Tailwind CSS, Framer Motion",
    },
    SearchAnimation: {
      component: <SearchAnimation />,
      title: "Search Animation",
      description: "An animation that searches data in a list.",
      tech: "Tailwind CSS, Framer Motion",
    },
  };

  const animation = name ? animations[name] : undefined;

  if (!animation) {
    return (
      <div className="h-screen flex flex-col bg-white p-4 max-md:p-2 overflow-y-auto">
        <div className="self-start mb-4 pt-8 pl-16">
          <Link to="/" className="text-primary flex items-center gap-2">
            <MoveLeft /> Back to Home
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-600">Animation not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-white p-4 max-md:p-2 overflow-y-auto">
      <div className="self-start mb-4 pt-8 pl-16">
        <Link to="/" className="text-primary flex items-center gap-2">
          <MoveLeft /> Back to Home
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-2">{animation.title}</h1>
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
          © {new Date().getFullYear()} Animations Portfolio - designed by
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
