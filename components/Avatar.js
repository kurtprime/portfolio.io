//next iamge
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="hidden xl:flex z-0 xl:max-w-none bg-blend-difference">
      <Image
        src={'/avatar-kurt1.png'}
        width={737}
        height={678}
        className="trnaslate-z-0 w-full h-full"
        alt="Avatar"
      />
    </div>
  );
};

export default Avatar;
