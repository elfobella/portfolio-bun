interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export function Button({
  variant = 'primary',
  children,
  href,
  onClick,
  className = '',
  external = false,
}: ButtonProps) {
  const baseStyles = {
    primary: "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-primary hover:opacity-90 rounded-lg transition-all shadow-md",
    secondary: "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 dark:text-white border border-gray-300 dark:border-gray-700 hover:border-violet-500 dark:hover:border-violet-500 rounded-lg transition-all"
  };

  const styles = `${baseStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
} 