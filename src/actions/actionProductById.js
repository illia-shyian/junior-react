import { gql } from "../helpers";
import { actionPromise } from "../reducers/promiseReducer";

export const actionProductById = ({
    promiseName = "productById",
    id = "",
} = {}) =>
    actionPromise(
        promiseName,
        gql(
            `
            query productById($id:String!){
                product(id:$id){
                    id name inStock description brand
                    attributes{
                      name type
                      items{
                        displayValue
                        value      
                      }
                    }
                    prices{
                      amount
                      currency{
                        label symbol
                      }
                    }
                    gallery
                  }
            }`,
            {
                id,
            }
        )
    );
