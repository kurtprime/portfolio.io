import { Sora } from '@next/font/google';

//font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

//import components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopleftImg from '../components/TopLeftImg';

const Layout = ({ children }) => {
  return (
    <>
      <div
        className={`page bg-site text-white h-screen overflow-auto bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <TopleftImg />
        <Nav />
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
