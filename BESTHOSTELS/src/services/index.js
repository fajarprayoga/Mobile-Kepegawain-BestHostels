import Config from 'react-native-config';
import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

// GET
const product = (token) => Get('product',false);

//POST
const staffslist =(data,token) => Post('/api/close/admin/staffs/list', false, data, token)
// PUT
const customerEdit = (data, token) => Put(`/api/close/admin/customers/${data.id}`, false, data, token);

// DELETE
const customerDelete = (id, token) => Delete(`/api/close/admin/customers/${id}`, false, token);
const API = {
      product,
      customerEdit,
      customerDelete,
      staffslist,
}

export default API;