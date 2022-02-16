import Config from 'react-native-config';
import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';
import Patch from './Patch';

// GET
const product = () => Get('product',false);
const position = () => Get('position', false);
const leave = () => Get('leave', false);
const salary = () => Get('salary', false);
//POST
const login =(data) => Post('user/login', false, data);
const signUp =(data) => Post('user', false, data);
const addPosition =(data) => Post('position', false, data);
const addLeave = (data) => Post('leave', false, data);

// PATCH
const editLeave = (data, id) => Patch('leave/'+id, false, data)
const updateSalary = (data, id) => Patch('salary/' + id, false, data);

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
      deletePosition,
      leave,
      addLeave,
      editLeave,
      salary,
      updateSalary
}

export default API;