export const Button = ({
  className = "",
  size = "default",
  children,
  href,
  download,
  target,
  rel,
  onClick,
  type = "button",
}) => {
  const baseClass = "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-primary text-primary-foreground bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseClass} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        <span className="relative flex items-center justify-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      <span className="relative flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};
