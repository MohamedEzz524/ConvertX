import { Link } from 'react-router-dom';

type ButtonProps = {
  text: string;
  link: string;
  type: 'bulk' | 'outline';
  size?: 'md' | 'sm' | 'lg';
  disabled?: boolean;
};

const Button = ({ text, type, link, disabled }: ButtonProps) => {
  const baseClasses = `${type === 'bulk' ? 'button-gradient bulk-btn' : 'outline-btn'}`;

  if (disabled) {
    return (
      <span
        className={`${baseClasses} pointer-events-none cursor-not-allowed text-[15px] opacity-50`}
        aria-disabled="true"
      >
        {text}
      </span>
    );
  }

  return (
    <Link to={link} className={`${baseClasses} pointer-events-auto`}>
      {text}
    </Link>
  );
};

export default Button;
