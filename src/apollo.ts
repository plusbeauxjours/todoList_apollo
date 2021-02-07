import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getTodos, getTodosCounter } from "./store"

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                getTodos,
                getTodosCounter
            }
        }
    }
});

const client = new ApolloClient({
    cache
})

export default client;