// components/Button.tsx
import Link from "next/link";

type CategoryButtonProps = {
  id: string;
  title: string;
};

const Button = ({ id, title }: CategoryButtonProps) => {
  return (
    <Link
      href={`/categories/${id}`}
      className="w-full block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl py-2 text-center"
    >
      Explore {title}
    </Link>
  );
};

export default Button;
