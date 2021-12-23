
import './Toast.css';

type ToastType = 'success' | 'error' | 'warning';

interface ToastProps {
  message: string;
  type?: ToastType;
  className?: string;
}

export default function Toast(props: ToastProps) {
  const { message, type = 'success', className = '' } = props;
  return (
    <div className={`toast ${className} ${type}`} >
      <div className="toast-content">
        {message}
      </div>
    </div>
  );
}


