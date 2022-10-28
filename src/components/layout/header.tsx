import { SearchBar } from './search-bar';
import { UserUI } from './user-ui';

export const Header = () => {
  return (
    <header className="mx-8 mt-8 flex justify-between gap-4">
      <SearchBar />
      <UserUI />
    </header>
  );
};
