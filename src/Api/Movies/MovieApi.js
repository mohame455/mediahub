import { apiGet } from "../StandardApi";

export const getAllMovies = async (title,sortBy) => {
    let api='movies'
    if(title&&sortBy){
        api=`${api}?query=${title}&sortBy=${sortBy}`
    }
    if(title){
        api=`${api}?query=${title}`
        
    }
    if(sortBy){
        api=`${api}&sortBy=${sortBy}`
    }
    const res = await apiGet(api);
    return res;
  };

  export const getMovieDetail = async (id) => {
    const res = await apiGet(`movies/${id}`);
    return res;
  };