import { paisesJSON } from "../data";



const getAll = () => {


    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
            resolve (paisesJSON)
        },[ 2000 ] )
    })
};

const get = (id) =>{}

const add = (user)=>{

}
export const paisesService = { getAll ,get, add }

