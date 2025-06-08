import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LoginFormData {
  user: string;
  password: string;
  rememberMe: boolean;
}

interface LoginResponse {
  status: 'success' | 'error';
  message: string;
  access_token?: string;
}

interface UseLoginReturn {
  formData: LoginFormData;
  message: string | null;
  isLoading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

const initialFormData: LoginFormData = {
  user: '',
  password: '',
  rememberMe: false,
};

export const useLogin = (): UseLoginReturn => {
  const [formData, setFormData] = useState<LoginFormData>(initialFormData);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = (): string | null => {
    if (!formData.user.trim()) {
      return 'الرجاء إدخال البريد الإلكتروني';
    }
    if (!formData.user.includes('@')) {
      return 'الرجاء إدخال بريد إلكتروني صحيح';
    }
    if (!formData.password) {
      return 'الرجاء إدخال كلمة المرور';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setMessage(validationError);
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: formData.user,
          password: formData.password,
        }),
      });

      const data: LoginResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'فشل تسجيل الدخول');
      }

      if (data.status === 'success' && data.access_token) {
        // Store the token
        localStorage.setItem('token', data.access_token);
        
        // Store remember me preference
        if (formData.rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        } else {
          localStorage.removeItem('rememberMe');
        }

        setMessage('تم تسجيل الدخول بنجاح');
        
        // Navigate to dashboard after a brief delay
        setTimeout(() => {
          router.push('/dashboard');
        }, 1000);
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'حدث خطأ ما. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    message,
    isLoading,
    handleChange,
    handleSubmit,
  };
};