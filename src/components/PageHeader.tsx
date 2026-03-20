import Link from "next/link";

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <section className="relative h-60 flex items-center bg-black/90 justify-center bg-cover bg-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[f9f9f9]"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6">

        {/* Gold decorative line */}
        <div className="w-16 h-0.5 bg-orange-500 mx-auto mb-6"></div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide uppercase mb-6">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="flex justify-center items-center gap-3 text-sm tracking-wider">

          <Link href="/" className="text-gra]y-300 hover:text-orange-400 transition duration-300">
            Home
          </Link>
          <span className="text-gray-500">•</span>
          <span className="text-orange-400 font-medium">
            {title}
          </span>
        </div>
      </div>
    </section>
  );
}