import axios from 'axios'
import { DtoProductsResponse } from './DtoProductsResponse'

export class useProductMksService {
 static async list() {
  const url = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"

  const response = await axios.get<DtoProductsResponse>(url)
  return response.data
 }
}

