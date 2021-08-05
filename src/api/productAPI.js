import AxiosClient from "./axiosClient";

const ProductAPI = {
    getAll(){
        const url = `/products`;
        return AxiosClient.get(url);
    },
    get(id){
        const url = `/products/${id}`;
        return AxiosClient.get(url);
    },
    add(product){
        const url = `/products`;
        return AxiosClient.post(url, product);
    },
    edit(id, item){
        const url = `/products/${id}`;
        return AxiosClient.put(url, item);
    },
    remove(id){
        const url = `/products/${id}`;
        return AxiosClient.delete(url);
    }
}
export default ProductAPI;