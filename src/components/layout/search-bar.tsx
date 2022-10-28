import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export const SearchBar = () => {
  return (
    <form
      className="
      overflow-hidden rounded-md bg-gray-2 focus-within:outline
      focus-within:outline-indigo-400">
      <label htmlFor="search" className="flex h-full items-center">
        <input
          className="
             w-full bg-gray-2 py-4 px-8 text-xl placeholder:bg-gray-2  placeholder:text-white focus:outline-none"
          type="text"
          id="search"
          placeholder="Search"
        />
        <MagnifyingGlassIcon className="icon -translate-x-6 fill-white" />
      </label>
    </form>
  );
};
