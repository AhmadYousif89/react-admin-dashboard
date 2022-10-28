import {
  UserIcon,
  UsersIcon,
  CalendarIcon,
  RectangleStackIcon,
  PresentationChartLineIcon,
  ClipboardDocumentListIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon,
  ChartPieIcon,
  MapIcon,
} from '@heroicons/react/24/outline';
import { LinkItem } from './link-item';

export interface Item {
  id: number;
  title: string;
  icon: JSX.Element;
  href: string;
  options?: {
    selected: boolean;
    active: boolean;
  };
}
type Data = { [key: string | number]: Item[] }[];

interface Options {
  selected: boolean;
  active: boolean;
}

interface DataItem {
  id: number;
  title: string;
  href: string;
  icon: JSX.Element;
  options?: Options;
}

// just left out href prop to make it different
interface Chart {
  id: number;
  title: string;
  href: string;
  icon: JSX.Element;
  options?: Options;
}

interface DataParent {
  data: DataItem[];
}

interface ChartParent {
  charts: Chart[];
}

let dataArray: DataItem[] = [
  {
    id: 1,
    title: 'manage teams',
    icon: <UsersIcon />,
    href: '/team',
    options: {
      selected: true,
      active: true,
    },
  },
  {
    id: 2,
    title: 'invoices balances',
    icon: <ClipboardDocumentListIcon />,
    href: '/invoices',
    // options ...
  },
  {
    id: 3,
    title: 'contacts informations',
    icon: <RectangleStackIcon />,
    href: '/contacts',
    // options ...
  },
];

let chartArray: Chart[] = [
  {
    id: 1,
    title: 'pie chart',
    icon: <ChartPieIcon />,
    href: '/pie',
  },
  {
    id: 2,
    title: 'bar chart',
    icon: <ChartBarIcon />,
    href: '/bar',
  },
  {
    id: 3,
    title: 'line chart',
    icon: <PresentationChartLineIcon />,
    href: '/line',
  },
  {
    id: 4,
    title: 'geography chart',
    icon: <MapIcon />,
    href: '/geography',
  },
];

let topLevelArray: (DataParent | ChartParent)[] = [
  { data: dataArray },
  { charts: chartArray },
];

const dataLinks: Data = [
  {
    data: [
      {
        id: 1,
        title: 'manage teams',
        icon: <UsersIcon />,
        href: '/team',
      },
      {
        id: 2,
        title: 'invoices balances',
        icon: <ClipboardDocumentListIcon />,
        href: '/invoices',
      },
      {
        id: 3,
        title: 'contacts informations',
        icon: <RectangleStackIcon />,
        href: '/contacts',
      },
    ],
  },
  {
    pages: [
      {
        id: 1,
        title: 'profile form',
        icon: <UserIcon />,
        href: '/form',
      },
      {
        id: 2,
        title: 'calendar',
        icon: <CalendarIcon />,
        href: '/calendar',
      },
      {
        id: 3,
        title: 'FAQs',
        icon: <QuestionMarkCircleIcon />,
        href: '/faq',
      },
    ],
  },
  {
    charts: [
      {
        id: 1,
        title: 'pie chart',
        icon: <ChartPieIcon />,
        href: '/pie',
      },
      {
        id: 2,
        title: 'bar chart',
        icon: <ChartBarIcon />,
        href: '/bar',
      },
      {
        id: 3,
        title: 'line chart',
        icon: <PresentationChartLineIcon />,
        href: '/line',
      },
      {
        id: 4,
        title: 'geography chart',
        icon: <MapIcon />,
        href: '/geography',
      },
    ],
  },
];

let linkList: JSX.Element[] = [];
let content: JSX.Element[] = [];
let heading = '';

for (const entry of dataLinks) {
  for (const key in entry) {
    heading = key;
    linkList = entry[key].map((dl: Item) => <LinkItem key={dl.id} {...dl} />);
  }
  content.push(
    <dl className="my-8" key={Math.random().toString(36).substring(2)}>
      <dt className="pb-4 font-semibold uppercase">{heading}</dt>
      {linkList}
    </dl>
  );
}

export const LinkList = () => {
  return <div>{content}</div>;
};
