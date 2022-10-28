import { Box } from '@mui/material';

interface ProgressProp {
  progress: number;
  size?: string | number;
}

export const PorgressRing = ({ progress = 0.7, size = 60 }: ProgressProp) => {
  const angle = (progress * 360) / 100;
  return (
    <Box
      sx={{
        background: `radial-gradient(var(--card-bg-color) 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, #a64829 ${angle}deg 360deg),
            #d29e25`,
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};
