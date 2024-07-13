import { useEffect, useState } from 'react';
import { ITEMS_PER_PAGE } from '../../../app/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllOrdersAsync,
  selectOrders,
  selectTotalOrders,
  updateOrderAsync,
} from '../../order/orderSlice';
import {
  PencilIcon,
  EyeIcon,
  TrashIcon 
} from '@heroicons/react/24/outline';
import Pagination from '../../common/Pagination';

import NavBar from '../../navbar/Navbar';
import axios from 'axios';
import { updateUserAsync } from '../../user/userSlice';

function AdminVerifyUser() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const totalOrders = useSelector(selectTotalOrders);
  const [editableOrderId, setEditableOrderId] = useState(-1);
  const [sort, setSort] = useState({});

  const [users, setUsers] = useState([]);

  // http://localhost:3000
  useEffect(() => {
    axios.get('/users/allUsers')
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
  }, [dispatch]);

  const handleEdit = (user) => {
    setEditableOrderId(user.id);
  };

  const handleDelete = async (userId) => {
    const alert = window.confirm("Are you sure you want to delete this User?");

    if(alert) {
      return new Promise(async (resolve) => {
        const response = await fetch(
          '/users/' + userId,
          {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
          }
        );
        const data = await response.json();
        window.confirm("User has been deleted successfully");
        resolve({ data });
        });
    }
  }

  const handleShow = () => {
  };

  const handleUserVerifiationStatus = (e, user) => {
    const updatedUser = { ...user, verified: e.target.value };
    dispatch(updateUserAsync(updatedUser));
    setEditableOrderId(-1);
  };

  const handlePage = (page) => {
    setPage(page);
  };

  const handleSort = (sortOption) => {
    const sort = { _sort: sortOption.sort, _order: sortOption.order };
    setSort(sort);
  };

  const chooseColor = (status) => {
    switch (status) {
      case 'verified':
        return 'bg-green-200 text-green-600';
      case 'invalid':
        return 'bg-red-200 text-red-600';
      case 'admin':
        return 'bg-green-200 text-green-600';
      case 'user':
        return 'bg-green-200 text-green-600';
      case 'true':
        return 'bg-green-200 text-green-600';
      case 'false':
        return 'bg-red-200 text-red-600';
      default:
        return 'bg-purple-200 text-purple-600';
    }
  };

  return (
    <NavBar>
    <div className="overflow-x-auto">
      <div className="bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
        <div className="w-full">
          <div className="bg-white shadow-md rounded my-6">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th
                    className="py-3 px-0 text-left cursor-pointer"
                    onClick={(e) =>
                      handleSort({
                        sort: 'id',
                        order: sort?._order === 'asc' ? 'desc' : 'asc',
                      })
                    }
                  >
                    User email{' '}
                  </th>
                  <th className="py-3 px-0 text-left">User Role</th>
                  {/* <th className="py-3 px-0 text-center">Shipping Address</th> */}
                  <th className="py-3 px-0 text-center">Verified User</th>
                  <th className="py-3 px-0 text-center">Actions</th>

                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-0 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-medium">{user.email}</span>
                      </div>
                    </td>
                    
                    {/* <td className="py-3 px-0 text-center">
                      <div className="">
                        <div>
                          <strong>{order.selectedAddress.name}</strong>,
                        </div>
                        <div>{order.selectedAddress.street},</div>
                        <div>{order.selectedAddress.city}, </div>
                        <div>{order.selectedAddress.state}, </div>
                        <div>{order.selectedAddress.pinCode}, </div>
                        <div>{order.selectedAddress.phone}, </div>
                      </div>
                    </td> */}

                    <td className="py-3 px-0 text-center">
                    <span
                          className={`${chooseColor(
                            user.role
                          )} py-1 px-3 rounded-full text-xs`}
                        >
                          {user.role}
                        </span>
                      {/* {user.id === editableOrderId ? (
                        <select onChange={(e) => handleUserRole(e, user)}>
                          <option value="admin">User</option>
                          <option value="user">Admin</option>
                        </select>
                      ) : (
                        <span
                          className={`${chooseColor(
                            user.role
                          )} py-1 px-3 rounded-full text-xs`}
                        >
                          {user.role}
                        </span>
                      )} */}
                    </td>

                    <td className="py-3 px-0 text-center">
                        <span
                          className='py-1 px-3  text-xs'
                          style={{color: user.verified ? 'green' : 'red'}}
                        >
                          {user.verified + " "}
                        </span>
                    </td>

                    <td className="py-3 px-0 text-center">
                      <div className="flex item-center justify-center">
                        {/* <div className="w-6 mr-4 transform hover:text-purple-500 hover:scale-120">
                          <EyeIcon
                            className="w-8 h-8"
                            onClick={(e) => handleShow(user)}
                          ></EyeIcon>
                        </div> */}
                        <div className="w-6 mr-2 transform hover:text-red-500 hover:scale-120">
                          <TrashIcon
                            className="w-8 h-8"
                            onClick={() => handleDelete(user.id)}
                          ></TrashIcon>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        handlePage={handlePage}
        totalItems={totalOrders}
      ></Pagination>
    </div>
    </NavBar>
  );
}

export default AdminVerifyUser;
