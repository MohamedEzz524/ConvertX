import { Link } from 'react-router-dom';

type ButtonProps = {
  text: string;
  link: string;
  type: 'bulk' | 'outline';
  size?: 'md' | 'sm' | 'lg';
};
const Button = ({ text, type, link, size }: ButtonProps) => {
  return (
    <Link
      to={link}
      type="button"
      className={`${type}-btn ${size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-sm' : 'text-lg'}`}
    >
      {text}
    </Link>
  );
};

export default Button;
