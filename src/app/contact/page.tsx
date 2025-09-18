import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Numora. Have questions, feedback, or suggestions? Fill out our contact form and we’ll respond as soon as possible.",
  keywords: [
    "Numora contact",
    "calculator support",
    "feedback",
    "frontend developer",
    "React developer",
    "Next.js developer",
  ],
  openGraph: {
    title: "Contact Us | Numora",
    description:
      "Have questions, feedback, or want to hire a frontend developer? Contact Numora today.",
    siteName: "Numora",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-[92vh] px-6 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-30">
        
        {/* 👤 Personal Info / Advertisement Section */}
        <div className="rounded-2xl max-w-2xl p-8 text-center flex flex-col justify-center">
  <h2 className="text-2xl font-bold text-slate-800 mb-4">
    👋 Hi, I&#39;m <span className="text-cyan-600">Shahzad</span>
  </h2>

  <p className="text-gray-600 text-lg leading-relaxed mb-6">
    Do you want to build a{" "}
    <span className="font-semibold">website or tool</span> that can generate
    revenue through <span className="font-medium text-slate-800">
      Google AdSense, affiliate marketing, or other online channels
    </span>
    ? I help create modern, high-performance, and revenue-focused platforms.
  </p>

  <p className="text-gray-700 text-md mb-4">
    🚀 Let&#39;s work together to turn your idea into a profitable online
    business.
  </p>

  {/* Email / CTA */}
 <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mr.shahzad.developer@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-lg shadow hover:bg-cyan-700 transition"
>
  📧 Email Me Directly
</a>

</div>


        {/* 📩 Contact Form Section */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
            Contact <span className="text-cyan-600">Us</span>
          </h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
