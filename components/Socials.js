// links
import Link from 'next/link';

// icons
import {
  RiLinkedinLine,
  RiGithubLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiTelegramLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex flex-row items-center translate-z-30 gap-x-5 text-lg">
      <Link
        target="_blank"
        href={'https://www.linkedin.com/in/quejada-kurt-89577b23a/'}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiLinkedinLine />
      </Link>
      <Link
        target="_blank"
        href={'https://github.com/kurtprime'}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiGithubLine />
      </Link>
      <Link
        href={'https://www.instagram.com/kurtpri/'}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiInstagramLine />
      </Link>
      <Link
        target="_blank"
        href={'https://www.facebook.com/kurt.quejada2'}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiFacebookLine />
      </Link>
      <Link
        target="_blank"
        href={'https://twitter.com/QuejadaKurt'}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiTwitterLine />
      </Link>
      <Link
        target="_blank"
        href={'https://t.me/kurtpri'}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiTelegramLine />
      </Link>
    </div>
  );
};

export default Socials;
