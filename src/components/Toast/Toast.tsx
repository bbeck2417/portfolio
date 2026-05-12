import React from 'react';
import styles from './Toast.module.css';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
  return (
    <div className={`${styles.toast} ${isVisible ? styles.show : ''} montserrat-200`}>
      {message}
    </div>
  );
};

export default Toast;
