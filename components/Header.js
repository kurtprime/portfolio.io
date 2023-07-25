//next image
import Image from 'next/image';

//variables

//framer motion

//next link
import Link from 'next/link';

//components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-50 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-center  py-0">
          {/* logo */}
          <Link href={'/'}>
            <h1 className="text-[35px] md:text-[50px] mb-8 font-semibold ">
              kurt ivan{' '}
              <span className="text-white/60 font-thin">quejada.</span>
            </h1>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
