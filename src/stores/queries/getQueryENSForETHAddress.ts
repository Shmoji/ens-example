import { gql } from 'graphql-request'

export default function getQueryENSForETHAddress(ensAddress: string) {
  return gql`
    {
      domains(first: 1, where:{name:"${ensAddress.toLowerCase()}"}) {
        name
        labelName
        owner {
          id
          domains {
            id
          }
        }
      }
    }`
}
