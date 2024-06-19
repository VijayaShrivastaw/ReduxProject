import { takeEvery } from "redux-saga/effects"
import { USER_LIST } from "../redux/constant"
function* userList (){
    console.log('saga data')
}

function* sagaData (){
yield takeEvery(USER_LIST,userList)
    
}
export default sagaData