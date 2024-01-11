import { verifySha512 } from 'ldap-sha512'

export default defineEventHandler(async (event) => {
	setResponseHeaders(event, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Credentials': 'true' })
	const { cryptPassword, password } = (await readBody(event)) as { cryptPassword: string, password: string }
	return verifySha512(password, cryptPassword)
})
