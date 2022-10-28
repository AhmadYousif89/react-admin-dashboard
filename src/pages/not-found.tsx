import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export const NotFound = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10">
      <div className="text-4xl tracking-wide text-base-color">
        Page Not Found <span className="text-6xl">|</span> 404
      </div>
      <ExclamationTriangleIcon className="icon h-96 w-96 cursor-default fill-none stroke-with-red hover:ring-0" />
    </div>
  );
};
