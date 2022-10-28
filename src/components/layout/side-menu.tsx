import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/solid';
import { LinkList } from '../side-links.tsx/link-list';

export const SideMenu = () => {
  return (
    <section
      className={`
        flex min-h-screen min-w-fit origin-right flex-col bg-sideMenu py-8 px-12 text-xl text-base-color shadow-xl transition-transform duration-500`}>
      <figure className="mx-auto my-8 flex flex-col items-center gap-2">
        <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
          <img src="../../assets/profile-pic.png" alt="profile-image" />
        </div>
        <h2 className="text-3xl tracking-wide text-base-color">User Name</h2>
        <p className="text-lg text-second">GM Fancy Admin</p>
      </figure>

      <div className="my-8 ">
        <Link to="/dashboard" className="flex items-center gap-8 capitalize">
          <HomeIcon className="icon" />
          <span className="hover:text-highlight">dashboard</span>
        </Link>
      </div>

      <LinkList />
    </section>
  );
};
