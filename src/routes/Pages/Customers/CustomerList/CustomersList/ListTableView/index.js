import React from 'react';
import ListHeader from './ListHeader';
import Table from '@material-ui/core/Table';
import { useSelector } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import CustomerCell from './CustomerCell';
import CheckedListHeader from './CheckedListHeader';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const ListTableView = ({
  checkedCustomers,
  handleCellCheckBox,
  handleHeaderCheckBox,
  updateCheckedCustomers,
  onShowCustomerDetail,
  onClickEditCustomer,
}) => {
  const { customersList } = useSelector(({ customer }) => customer);
  return (
    <React.Fragment>
      {checkedCustomers.length > 0 && (
        <CheckedListHeader
          checkedCustomers={checkedCustomers}
          handleHeaderCheckBox={handleHeaderCheckBox}
          updateCheckedCustomers={updateCheckedCustomers}
        />
      )}
      <Box className="Cmt-table-responsive">
        <Table>
          {checkedCustomers.length === 0 && (
            <ListHeader
              customersList={customersList}
              checkedCustomers={checkedCustomers}
              handleHeaderCheckBox={handleHeaderCheckBox}
            />
          )}
          <TableBody>
            {customersList.map((customer, index) => (
              <CustomerCell
                key={index}
                customer={customer}
                checkedCustomers={checkedCustomers}
                handleCellCheckBox={handleCellCheckBox}
                onShowCustomerDetail={onShowCustomerDetail}
                onClickEditCustomer={onClickEditCustomer}
              />
            ))}
          </TableBody>
        </Table>
      </Box>
    </React.Fragment>
  );
};

export default ListTableView;

ListTableView.prototype = {
  checkedCustomers: PropTypes.array,
  handleCellCheckBox: PropTypes.func,
  handleHeaderCheckBox: PropTypes.func,
  updateCheckedCustomers: PropTypes.func,
  onShowCustomerDetail: PropTypes.func,
  onClickEditCustomer: PropTypes.func,
};

ListTableView.defaultProps = {
  checkedCustomers: [],
};
