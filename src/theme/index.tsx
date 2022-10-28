import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiCheckbox: {
      defaultProps: {
        checkedIcon: <CheckCircleIcon className="icon fill-sky-600" />,
      },
    },
  },
  typography: {
    fontSize: 20,
  },
});
