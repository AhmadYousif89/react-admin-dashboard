import { Link } from 'react-router-dom';
import { Item } from './link-list';

export const LinkItem = (link: Item) => {
  const { title, href, icon } = link;
  return (
    <dd>
      <Link to={href} className="flex items-center gap-8 py-2 capitalize">
        <span className="icon">{icon}</span>
        <span className="hover:text-highlight">{title}</span>
      </Link>
    </dd>
  );
};
