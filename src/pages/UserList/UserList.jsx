import React, {useState} from 'react';
import './UserList.css';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {userRows} from '../../dummyData'
import { Link } from 'react-router-dom';

const UserList = () => {
const [data, setData] = useState(userRows);

const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
}

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 200,
    renderCell: (params) => {
        return (
            <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.userName}
            </div>
        )
        }
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'number',
    width: 120,
  },
  {
    field: 'transaction',
    headerName: 'Transaction Volume',
    width: 160
  },
  {
      field: 'action',
      headerName:'Action',
      width:150 ,
      renderCell: (params) => {
          return (
            <>
            <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon className="userListDelete" onClick={() => handleDelete(params.row.id)} />
            </>
          )
      }
  }
];
    return (
        <div className="userList">
            <DataGrid
        rows={data}
        columns={columns}
        pageSize={12}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    );
};

export default UserList;