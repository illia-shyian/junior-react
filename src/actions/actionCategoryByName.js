import { gql } from "../helpers";
import { actionPromise } from "../reducers/promiseReducer";

export const actionCategoryByName = ({
    promiseName = "categoryByName",
    name = "",
} = {}) =>
    actionPromise(
        promiseName,
        gql(
            `query catByName($name:String!){
                category(input:{title:$name}){
                  name products{
                    id name gallery inStock brand
                    attributes{
                      id
                    }
                    prices{
                       amount currency{
                        symbol label
                      }
                    }
                  }
                }
              }`,
            {
                name,
            }
        )
    );
