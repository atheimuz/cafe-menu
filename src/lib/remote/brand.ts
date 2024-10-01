import axios from "axios";
import { IBrand } from "@/models/brand";

export const getBrandAPI = async (brandId: string) => {
    const res = await axios.get(`/api/brand/${brandId}`);
    const data: IBrand = res.data;

    return data;
};
