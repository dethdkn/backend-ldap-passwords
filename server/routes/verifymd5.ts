import { verifyMD5 } from 'ldap-passwords'

export default defineEventHandler(async (event) => {
	setResponseHeaders(event, { 'Access-Control-Allow-Origin': '*' })
	const { cryptPassword, password } = getQuery(event) as { cryptPassword: string, password: string }
	return verifyMD5(password, cryptPassword)
})
