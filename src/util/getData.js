import Axios from "axios";
import files from "./allPath";
const Request = Axios.create({
    baseURL:files.base,
    method:"GET",
    params:{
        appkey:"demo13_1545210570249"
    }
})
function getAllStudent(){
    return Request({
        url:files.searchAll
    })
}
function findByPage(page,size){
    return Request({
        url:files.findByPage,
        params:{
            page,
            size
        }
    })
}
function addStu(obj){
    return Request({
        url:files.addStuInfo,
        params:{
            sNo:obj.sNo,
            name:obj.name,
            birth:obj.birth,
            sex:obj.sex,
            phone:obj.phone,
            address:obj.address,
            email:obj.email
        }
    })
}
function removeOne(sNo){
return Request({
    url:files.deleteOne,
    params:{
        sNo
    }
})
}
function findOneInfo(id){
    return Request({
        url:files.findByKeyWord,
        params:{
            page:1,
            size:10,
            search:id,
            sex:-1
        }
    })

}
function UpdateOneInfo(obj){
return Request({
    url:files.updateOneInfo,
    params:{
        ...obj
    }
})
}
function SearchStuList(search){
    return Request({
        url:files.findByKeyWord,
        params:{
        sex:-1,
        search,
        page:1,
        size:10
        }
    })

}

export default{
    getAllStudent,
    findByPage,
    addStu,
    removeOne,
    findOneInfo,
    UpdateOneInfo,
    SearchStuList,
}