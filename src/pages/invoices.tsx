import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Heading } from '../components/layout/heading';
import { mockDataInvoices } from '../mocks/mock-data';

export const Invoices = () => {
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
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
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params: any) => <div className="">${params.row.cost}</div>,
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
    },
  ];

  return (
    <section>
      <Heading title="invoices" subTitle="list of invoice balances" />
      <div className="h-[60rem] shadow-lg">
        <DataGrid
          checkboxSelection
          aria-label="manage teams"
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          rows={mockDataInvoices}
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
