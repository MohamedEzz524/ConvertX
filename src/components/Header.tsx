import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <header className="header--border flex items-center justify-between rounded-lg p-4">
      <div className="mask pointer-events-none absolute inset-0 z-0 rounded-md bg-gradient-to-tr from-[#ff9ba599] to-[#862c3599] p-[2px]">
        <div className="h-full w-full rounded-md bg-gray-900"></div>
      </div>
      <Link to="/">
        <img src="https://res.cloudinary.com/dzw9sp2g3/image/upload/v1758908085/Logo_i7rhj7.png" alt="logo" className="h-auto w-37" draggable={false} />
      </Link>

      <div className="flex gap-5">
        <Button
          text="BOOK A CONSULTATION"
          link="/book-consultation"
          type="outline"
        />
        <Button text="START NOW" link="/hire-us" type="bulk" />
      </div>
    </header>
  );
};

export default Header;
