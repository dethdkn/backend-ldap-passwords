import { sha512Crypt } from 'ldap-sha512'

export default defineEventHandler(async (event) => {
	setResponseHeaders(event, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Credentials': 'true' })
	const { password, salt } = (await readBody(event)) as { password: string, salt: string }
	return sha512Crypt(password, salt)
})
