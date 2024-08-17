import { message, notification, Table } from "antd";
import { getUserApi } from "../util/api";
import { useEffect, useState } from "react";

const UserPage=  ()=>{
    const [dataSource,setdataSource]= useState([])
    useEffect(()=>{
        const fetchUser = async ()=>{
          
            const res= await getUserApi();
              if(!res?.message){
                setdataSource(res)
              } else{
                notification.error({
                  message:res.message,
                  description: 'sai'
                })
              }
            
            
        }
        fetchUser();


    },[])
      
      const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: 'id',
          },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        
      ];
      
      
    return(
        <Table dataSource={dataSource} columns={columns} rowKey={'_id'}/>
    )
    
}
export default UserPage