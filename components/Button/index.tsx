import Image from 'next/image';

type ButtonProps = {
  type: 'submit' | 'button';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && 'w-full'
      }`}
      type={type}
    >
      {icon && <Image src={icon} width={24} height={24} alt={title} />}{' '}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>{' '}
    </button>
  );
};

export default Button;