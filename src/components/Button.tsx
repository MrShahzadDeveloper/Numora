import Link from "next/link";
import React from "react";

type CategoryButtonProps = {
  title: string;
};

const Button = ({ title }: CategoryButtonProps) => {
  // slugify title
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      href={`/categories/${slug}`}
      className="w-full block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-xl py-2 text-center"
    >
      Explore {title}
    </Link>
  );
};

export default Button;
