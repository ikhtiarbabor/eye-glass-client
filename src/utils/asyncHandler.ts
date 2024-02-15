/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'sonner';
import { TError } from '../types';

interface TData {
  toastText: string;
  res: Promise<any>;
  executable?: () => void;
}
const asyncHandler = async (data: TData) => {
  const toastId = toast.loading(`trying to ${data.toastText}`, {
    duration: 2000,
  });
  try {
    const result = await data.res;
    toast.success(`${result?.message}`, {
      duration: 2000,
      id: toastId,
    });
    if (data?.executable) {
      data.executable();
    }
  } catch (error: TError | any) {
    toast.error(`${error.data.message}`, { id: toastId, duration: 2000 });
  }
};
export default asyncHandler;
