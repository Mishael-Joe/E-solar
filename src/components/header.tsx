import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="w-full h-[20rem] bg-red-70 relative">
      <div className="w-full md:max-w-6xl mx-auto py-4 px-6 flex flex-col justify-between sm:items-center gap-6">
        <div>
          <h1>Your Partner in Clean Energy Solutions - E-Solar</h1>
          <p>
            {/* **E-Solar: Powering a Brighter, Greener Future!** */}
            E-Solar is a leading solar power company in Nigeria, dedicated to
            providing high-quality solar solutions for both households and
            industries. We offer comprehensive solar installation services
            across the entire nation.
          </p>
        </div>

        <div>
          <Image
            src={`/solar-pannels-big-to-small.png`}
            height={500}
            width={500}
            alt="solar-pannels"
          />
        </div>
      </div>

      <div className="header-img absolute" />
    </header>
  );
}

export default Header;
