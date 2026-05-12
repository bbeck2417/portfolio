import React from 'react';
import Link from 'next/link';
import styles from './SocialButton.module.css';

interface SocialButtonProps {
  href?: string;
  onClick?: () => void;
  ariaLabel: string;
  id?: string;
  children: React.ReactNode;
  download?: string;
  target?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  onClick,
  ariaLabel,
  id,
  children,
  download,
  target,
}) => {
  const className = `${styles.socialBtn} ${href ? styles.link : styles.button}`;

  if (href) {
    // If it's an external link or has a download attribute, Link might not be ideal
    // but Next.js 13+ Link handles external links fine.
    // However, for 'download' and 'mailto:', raw <a> is often preferred.
    // If it starts with 'http', 'mailto:', or has 'download', we use raw <a>.
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || download;

    if (isExternal) {
      return (
        <a
          href={href}
          className={className}
          aria-label={ariaLabel}
          id={id}
          download={download}
          target={target}
          onClick={onClick}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={className}
        aria-label={ariaLabel}
        id={id}
        target={target}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
      id={id}
      type="button"
    >
      {children}
    </button>
  );
};


export default SocialButton;
