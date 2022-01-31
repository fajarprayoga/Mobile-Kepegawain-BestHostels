import { showMessage } from "react-native-flash-message";

const Message = (type, message) =>{
    showMessage({
        message: message,
        description: type,
        type: type,
    })
}

export default Message;