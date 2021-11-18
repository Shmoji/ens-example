import { request } from 'graphql-request'
import getQueryENSForETHAddress from './queries/getQueryENSForETHAddress'

const HTTP_GRAPHQL_ENDPOINT =
  'https://api.thegraph.com/subgraphs/name/ensdomains/ens'

/*
 * @param ensAddress - the ENS address. Example: vitalik.eth
 * @return the Ethereum address or 0 string if invalid
 */
export async function queryENSForETHAddress(ensAddress: string): Promise<string> {
  if (!ensAddress || !ensAddress.toLowerCase().includes('.eth')) {
    return '0'
  }
  const result = await request(HTTP_GRAPHQL_ENDPOINT, getQueryENSForETHAddress(ensAddress))
  return result.domains && result.domains.length > 0
    ? result.domains[0].owner.id
    : '0'
}
