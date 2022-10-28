import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';

import { Heading } from '../components/layout/heading';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
} from '@mui/material';

const questions = [
  { id: 1, title: 'question # 1' },
  { id: 2, title: 'question # 2' },
  { id: 3, title: 'question # 3' },
  { id: 4, title: 'question # 4' },
  { id: 5, title: 'question # 5' },
];

export const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section>
      <Heading title="faq" subTitle="frequently asked questions 🚨" />

      <div className="flex flex-col gap-4">
        {questions.map(question => (
          <Accordion
            key={question.id}
            expanded={expanded === `panel-${question.id}`}
            onChange={handleChange(`panel-${question.id}`)}>
            <AccordionSummary
              expandIcon={<ChevronDownIcon className="icon fill-black" />}>
              <p className="text-3xl capitalize text-sky-600">
                {question.title}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-2xl">
                Lorem ipsum, dolor sit tur adipisicing elit. Laboriosam quaerat
                ea necessitatibus libero ad, ipsa soluta magnam voluptatibus
                dolorum molestiae.
              </p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
};
