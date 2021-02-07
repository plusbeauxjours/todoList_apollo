import { gql } from '@apollo/client'

export const GET_TODOS = gql`
query{
    getTodos @client
    # @client로 로컬 전용 필드임을 명시
}
`