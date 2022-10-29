import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleAppTheme, uiSelector } from '../../features/ui-slice';
import {
  SunIcon,
  MoonIcon,
  UserIcon,
  BellAlertIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid';
export const UserUI = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(uiSelector);

  const animateDarkIcon =
    theme.mode === 'dark-theme' ? '-translate-x-1/2' : '-translate-x-20';
  const animateLightIcon =
    theme.mode === 'light-theme' ? 'translate-x-1/2' : 'translate-x-20';

  return (
    <ul className=" flex items-center gap-6">
      <li
        className="
        relative cursor-pointer overflow-hidden rounded-full p-8 shadow-md ring-2 ring-indigo-400"
        title={`switch to ${
          theme.mode === 'dark-theme' ? 'dark' : 'light'
        } mode`}
        onClick={() => dispatch(toggleAppTheme())}>
        <SunIcon
          className={`
          icon absolute top-1/2 left-1/2 -translate-y-1/2 transition-transform duration-500 hover:ring-0 ${animateDarkIcon}`}
        />
        <MoonIcon
          className={`
          icon absolute top-1/2 right-1/2 -translate-y-1/2 transition-transform duration-500 hover:ring-0 ${animateLightIcon}`}
        />
      </li>
      <li>
        <BellAlertIcon className="icon" />
      </li>
      <li>
        <Cog6ToothIcon className="icon" />
      </li>
      <li>
        <UserIcon className="icon" />
      </li>
    </ul>
  );
};
