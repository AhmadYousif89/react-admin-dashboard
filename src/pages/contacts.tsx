import { DataGrid, GridAlignment, GridToolbar } from '@mui/x-data-grid';
import { Heading } from '../components/layout/heading';
import { mockDataContacts } from '../mocks/mock-data';

export const Contacts = () => {
  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'registrarId', headerName: 'Registrar ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left' as GridAlignment,
      align: 'left' as GridAlignment,
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
      field: 'address',
      headerName: 'Address',
      flex: 1,
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 1,
    },
    {
      field: 'zipCode',
      headerName: 'Zip Code',
      flex: 1,
    },
  ];

  return (
    <section>
      <Heading
        title="contacts"
        subTitle="list of contacts for future reference"
      />
      <div className="h-[60rem] shadow-lg">
        <DataGrid
          checkboxSelection
          aria-label="manage teams"
          columns={columns}
          rows={mockDataContacts}
          components={{ Toolbar: GridToolbar }}
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
