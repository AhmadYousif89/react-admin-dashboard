import { DataGrid, GridAlignment, GridToolbar } from '@mui/x-data-grid';
import { Heading } from '../components/layout/heading';
import { mockDataTeam } from '../mocks/mock-data';

export const Team = () => {
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      align: 'left' as GridAlignment,
      headerAlign: 'left' as GridAlignment,
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }: any) => {
        return (
          <div
            className={`flex h-full w-full items-center bg-opacity-25 pl-4 capitalize ${
              access === 'user'
                ? 'bg-slate-400'
                : access === 'admin'
                ? 'bg-slate-600'
                : access === 'manager'
                ? 'bg-slate-800'
                : ''
            }`}>
            {access}
          </div>
        );
      },
    },
  ];

  return (
    <section>
      <Heading title="manage teams" subTitle="manage your team members" />
      <div className="h-[60rem] shadow-lg">
        <DataGrid
          checkboxSelection
          aria-label="manage teams"
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          rows={mockDataTeam}
          style={{
            border: 'none',
            color: 'var(--text-color-second)',
            backgroundColor: 'var(--bg-side-color)',
          }}
          sx={{
            '.MuiDataGrid-cell': {
              paddingInline: '0',
              borderBottom: 'none',
            },
            '.MuiDataGrid-columnHeaders': {
              backgroundColor: 'var(--text-highlight)',
              color: 'black',
            },
            '.MuiDataGrid-iconSeparator': {
              color: 'black',
            },
            '.MuiDataGrid-sortIcon': {
              color: 'black',
            },
            '.MuiDataGrid-footerContainer': {
              backgroundColor: 'var(--text-highlight)',
            },
            '.MuiDataGrid-toolbarContainer': {
              padding: '1rem',
            },
            '.MuiButtonBase-root': {
              color: 'var(--text-color)',
              ':hover': {
                color: 'var(--text-highlight)',
              },
            },
          }}
        />
      </div>
    </section>
  );
};
