import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
}

interface SignupResponse {
  status: 'success' | 'error';
  message: string;
  token?: string;
}

interface UseSignupReturn {
  formData: SignupFormData;
  message: string | null;
  isLoading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
}

const initialFormData: SignupFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  terms: false,
};

export const useSignup = (): UseSignupReturn => {
    const router = useRouter();
  const [formData, setFormData] = useState<SignupFormData>(initialFormData);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = (): string | null => {
    if (!formData.terms) {
      return 'يجب الموافقة على الشروط والأحكام';
    }
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      return 'الرجاء إدخال الاسم الأول والأخير';
    }
    if (!formData.email.includes('@')) {
      return 'الرجاء إدخال بريد إلكتروني صحيح';
    }
    if (formData.password.length < 8) {
      return 'يجب أن تتكون كلمة المرور من 8 أحرف على الأقل';
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

    const userData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data: SignupResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'حدث خطأ في التسجيل');
      }

      if (data.status === 'success' && data.token) {
        localStorage.setItem('authToken', data.token);
        setMessage('تم إنشاء الحساب بنجاح');
        setFormData(initialFormData);
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