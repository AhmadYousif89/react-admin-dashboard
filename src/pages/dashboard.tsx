import {
  PresentationChartLineIcon,
  AdjustmentsVerticalIcon,
  CalculatorIcon,
  EnvelopeIcon,
  UserPlusIcon,
  ChartBarIcon,
  ChartPieIcon,
  MapIcon,
  CloudArrowDownIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { BarChart } from '../components/charts/bar-chart';
import { GeographyChart } from '../components/charts/geo-chart';
import { LineChart } from '../components/charts/line-chart';
import { PieChart } from '../components/charts/pie-chart';
import { Heading } from '../components/layout/heading';
import { StatsBox } from '../components/stats/stats-box';
import { Card } from '../components/ui/card';
import { mockTransactions } from '../mocks/mock-data';

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="flex items-center justify-between">
        <Heading title="dashboard" subTitle="welcome to your dashboard" />
        <button
          className="
          flex items-center gap-2 rounded-md bg-card p-4 text-xl
          capitalize shadow-md transition-transform active:translate-y-1">
          <CloudArrowDownIcon className="icon fill-none" />
          <span>download reports</span>
        </button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(25rem,1fr))] items-start gap-4">
        <StatsBox
          icon={<UserPlusIcon />}
          title="new clients"
          count={14600}
          progress={60}
          increase={10}
        />
        <StatsBox
          icon={<AdjustmentsVerticalIcon />}
          title="traffic inbound"
          count={672123}
          progress={34}
          increase={14}
        />
        <StatsBox
          icon={<CalculatorIcon />}
          title="sales grows"
          count={222500}
          progress={20}
          increase={8}
        />
        <StatsBox
          icon={<EnvelopeIcon />}
          title="emails sent"
          count={30021}
          progress={80}
          increase={22}
        />
      </div>

      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(50rem,1fr))] items-start gap-4">
        <Card className="relative h-[30vh]">
          <div className="absolute z-10 flex items-start gap-8">
            <PresentationChartLineIcon
              className="icon"
              onClick={() => navigate('/line')}
            />
          </div>
          <LineChart />
        </Card>

        <Card className="relative h-[30vh]">
          <ChartPieIcon
            className="icon absolute z-10 fill-none"
            onClick={() => navigate('/pie')}
          />
          <PieChart />
        </Card>

        <Card className="h-[30vh] overflow-y-scroll p-8">
          <p className="mb-8 text-3xl capitalize">latest transactions</p>
          <ul>
            {mockTransactions.map((trans, idx) => (
              <li
                key={`${trans.txId}-${idx}`}
                className="flex items-center justify-between border-t-2 py-6 text-xl">
                <div className="flex flex-col gap-2">
                  <span className="text-highlight">{trans.txId}</span>
                  <span>{trans.user}</span>
                </div>
                <p>{trans.date}</p>
                <p className="rounded-md bg-base-color p-4 font-bold text-base-color">
                  ${trans.cost}
                </p>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(50rem,1fr))] items-start gap-4">
        <Card className="h-[30vh]">
          <div className="flex items-center justify-between">
            <p className="text-3xl capitalize">sales quantity</p>
            <ChartBarIcon
              className="icon fill-none"
              onClick={() => navigate('/bar')}
            />
          </div>
          <BarChart />
        </Card>

        <Card className="relative h-[30vh] overflow-hidden p-8">
          <p className="mb-8 text-3xl capitalize">geographical traffic map</p>
          <MapIcon
            className="icon absolute top-5 right-10 z-10 fill-none"
            onClick={() => navigate('/geography')}
          />
          <GeographyChart isDashboard />
        </Card>
      </div>
    </section>
  );
};
