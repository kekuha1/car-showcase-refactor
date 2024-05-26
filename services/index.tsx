import request,{gql} from "graphql-request"

export const getCarsList=async()=>{
    const query = gql`
    query CarLists {
        carLists {
          carAvg
          createdAt
          id
          name
          price
          publishedAt
          updatedAt
          seat
          image {
            url
          }
          carType
          carBrand
        }
      }      
    `

    const result=await request(`process.env.MASTER_URL`, query);
    return result;
}
