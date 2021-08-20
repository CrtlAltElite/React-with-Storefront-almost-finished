import apiClientWithToken from './clientTokenAuth'

const endpointCategories = "/api/category";

export const getCategories = async (token) =>{
    const response = await apiClientWithToken(token).get(endpointCategories);
    if (400 <= response.status && response.status <500){return 400;}
    if (500 <= response.status && response.status <600){return 500;}
    if (response.ok){ return response.data.categories}
    return
};