import Config from 'react-native-config';
import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

// GET
const product = () => Get('product',false);
const position = () => Get('position', false);

//POST
const login =(data) => Post('user/login', false, data);
const signUp =(data) => Post('user', false, data);
const addPosition =(data) => Post('position', false, data);
// PUT
const customerEdit = (data, token) => Put(`/api/close/admin/customers/${data.id}`, false, data, token);
const updatePosition = (data, id) => Put('position/' + id, false, data);
// DELETE
const customerDelete = (id) => Delete(`/api/close/admin/customers/${id}`, false, token);
const deletePosition= (id) =>  Put('position/delete/' + id, false);
const API = {
      product,
      customerEdit,
      customerDelete,
      login,
      position,
      signUp,
      addPosition, 
      updatePosition, 
      deletePosition
}

export default API;