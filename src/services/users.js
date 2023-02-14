import { characters } from "../data/characters"


const getAll = () =>{
    
    return new Promise ((resolve,reject) => {
        
        setTimeout(()=>{
            resolve(characters)
        }, [100])
    
    })
    
    
    
}

const get = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(characters.find((elem) => elem.id.toString() === id));
      }, [500]);
    });
};

const getHouse = (house) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(characters.find((elem) => elem.house.toString() === house));
    }, [500]);
  });
};





export const usersService={ getAll, get , getHouse}

