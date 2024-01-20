import { sha512Crypt } from 'ldap-passwords'

export default defineEventHandler(async (event) => {
	setResponseHeaders(event, { 'Access-Control-Allow-Origin': '*' })
	const { password, salt } = getQuery(event) as { password: string, salt: string }
	return sha512Crypt(password, salt)
})
