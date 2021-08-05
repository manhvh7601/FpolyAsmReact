import AxiosClient from "./axiosClient";

const CategoryAPI = {
    getAll(){
        const url = `/categories`;
        return AxiosClient.get(url);
    },
    get(id){
        const url = `/categories/${id}`;
        return AxiosClient.get(url);
    },
    add(category){
        const url = `/categories`;
        return AxiosClient.post(url, category);
    },
    edit(id, item){
        const url = `/categories/${id}`;
        return AxiosClient.put(url, item);
    },
    remove(id){
        const url = `/categories/${id}`;
        return AxiosClient.delete(url);
    }
}

export default CategoryAPI
