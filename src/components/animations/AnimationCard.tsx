import { Link } from "react-router-dom";

interface AnimationCardProps {
  name: string;
  title: string;
}

export default function AnimationCard({ name, title }: AnimationCardProps) {
  return (
    <Link to={`/animation/${name}`}>
      <div className="rounded overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-white">
        <img
          src={`/previews/${name}.gif`}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-2 text-center">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
