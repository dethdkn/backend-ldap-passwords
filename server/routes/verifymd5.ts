import { verifyMD5 } from 'ldap-md5'

export default defineEventHandler(async (event) => {
	setResponseHeaders(event, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Credentials': 'true' })
	const { cryptPassword, password } = (await readBody(event)) as { cryptPassword: string, password: string }
	return verifyMD5(password, cryptPassword)
})
