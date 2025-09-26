import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="https://res.cloudinary.com/dzw9sp2g3/image/upload/v1758908085/Logo_i7rhj7.png"
        className="mx-auto w-35"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
