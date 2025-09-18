import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const categories = [
    { name: "Health", href: "/categories/health" },
    { name: "Finance", href: "/categories/finance" },
    { name: "Unit Conversions", href: "/categories/unit-conversions" },
    { name: "Maths & Science", href: "/categories/maths-science" },
    { name: "Everyday Life", href: "/categories/everyday-life" },
  ];

  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 justify-items-start">
        {/* Brand Section */}
        <div className="max-w-sm">
          <h1 className="text-2xl font-semibold text-cyan-700">Numora</h1>
          <p className="mt-2 sm:text-lg text-gray-600 leading-relaxed">
            Your trusted calculation hub for health, finance, science, and
            everyday math. Simple, accurate, and always free.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-40">
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-medium text-gray-900">Quick Links</h2>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="sm:text-md text-gray-600 hover:text-cyan-700 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-lg font-medium text-gray-900">Categories</h2>
            <ul className="mt-3 space-y-2">
              {categories.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="sm:text-md text-gray-600 hover:text-cyan-700 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 mt-6">
        <p className="text-center text-sm text-gray-500 py-4">
          © 2025 Numora. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
