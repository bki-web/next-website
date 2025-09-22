import Link from "next/link";
import Image from "next/image";

type CardProps = {
  href: string;
  backgroundImage: string;
  logoImage: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  description: string;
  linkText: string;
};

const ServiceCard = ({
  href,
  backgroundImage,
  logoImage,
  logoAlt,
  logoWidth,
  logoHeight,
  description,
  linkText,
}: CardProps) => {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="w-full xl:w-1/2 h-[400px] cursor-pointer flex flex-col justify-end relative bg-cover bg-bottom rounded-lg"
    >
      <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-[#E2E7F0] h-1/3" />
      {/* --- START OF CHANGES --- */}
      <div
        className="flex flex-col items-center justify-between xl:pt-4 pt-3 xl:pb-8 pb-6 xl:gap-4 gap-3 bg-white rounded-lg border-2 border-[#0A436A]/30 absolute right-[20px] left-[20px] lg:right-[80px] lg:left-[80px] -bottom-1/3 px-8 2xl:h-[350px] xl:h-[300px]" // 1. Added fixed height: h-72 (288px) and changed justify-center to justify-between
      >
        {/* --- END OF CHANGES --- */}
        <div className="flex flex-col items-center gap-4">
          {" "}
          {/* 2. Added a wrapper div for logo and description */}
          <Image
            src={logoImage}
            alt={logoAlt}
            width={logoWidth}
            height={logoHeight}
            className="object-contain h-[102px]"
          />
          <p className="xl:text-base 2xl:text-2xl text-lg text-black text-center">
            {description}
          </p>
        </div>
        <div className="xl:text-base 2xl:text-2xl text-lg text-[#0A436A]/75 text-center hover:text-[#0A436A] transition-colors duration-500 border-b-2 border-[#0A436A]/75 hover:border-[#0A436A]">
          {linkText}
        </div>
      </div>
    </Link>
  );
};

export default function DigitalPlatform() {
  const serviceCards = [
    {
      id: 1,
      href: "https://armada.bki.co.id",
      backgroundImage: "/bki-armada.jpg",
      logoImage: "/bki-armada-logo.png",
      logoAlt: "BKI Armada Logo",
      logoWidth: 110,
      logoHeight: 102,
      description: "Information for Owner or Ship Management Under BKI Class.",
      linkText: "Visit BKI Armada",
    },
    {
      id: 2,
      href: "https://new-my.bki.co.id/",
      backgroundImage: "/my-bki.jpg",
      logoImage: "/my-bki-logo.png",
      logoAlt: "myBKI Logo",
      logoWidth: 342,
      logoHeight: 102,
      description:
        "We provide independent and reliable ship classification services to ensure your vessels comply with international safety.",
      linkText: "Visit myBKI",
    },
  ];
  return (
    <section
      id={"digital-platform"}
      className="w-full h-full 2xl:px-28 xl:px-24 lg:px-20 px-8 lg:pt-12 pt-8 lg:pb-52 pb-56 flex flex-col justify-center items-center bg-[#E2E7F0] gap-10 2xl:gap-14"
    >
      <div className="w-full lg:w-2/3 flex flex-col lg:gap-4 gap-3">
        <p className="2xl:text-6xl lg:text-4xl text-2xl font-bold text-[#0A436A] text-center">
          Access Our Digital Platforms
        </p>
        <p className="2xl:text-3xl lg:text-xl text-lg text-black text-center">
          Connect with <span className="text-[#0A436A] font-bold">myBKI</span>{" "}
          for online services or explore
          <span className="text-[#0A436A] font-bold">&nbsp;BKI Armada</span> for
          fleet management solutions.
        </p>
      </div>
      <div className="w-full flex flex-col xl:flex-row-reverse items-center xl:gap-6 gap-52">
        {serviceCards.map((card) => (
          <ServiceCard
            key={card.id}
            href={card.href}
            backgroundImage={card.backgroundImage}
            logoImage={card.logoImage}
            logoAlt={card.logoAlt}
            logoWidth={card.logoWidth}
            logoHeight={card.logoHeight}
            description={card.description}
            linkText={card.linkText}
          />
          // A cleaner way to pass all props is using the spread operator:
          // <ServiceCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
