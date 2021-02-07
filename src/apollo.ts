import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getTodos, getTodosCounter } from "./store"

// const cache = new InMemoryCache({
//     typePolicies: {
//         Query: {
//             fields: {
//                 getTodos,
//                 getTodosCounter
//             }
//         }
//     }
// });

const cache = new InMemoryCache();
// useReactiveVar, makeVar를 사용하게되면, typePolicies를 지정할 필요가 없다.

const client = new ApolloClient({
    cache
})

export default client;