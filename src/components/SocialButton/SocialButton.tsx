import React from 'react';
import Link from 'next/link';
import styles from './SocialButton.module.css';
import { getAssetPath } from '../../lib/utils';

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
    const isExternal = href && (href.startsWith('http') || href.startsWith('mailto:'));
    const isDownload = !!download;

    if (isExternal || isDownload) {
      return (
        <a
          href={isDownload && href ? getAssetPath(href) : href}
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
        href={getAssetPath(href || '')}
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
