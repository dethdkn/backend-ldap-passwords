import { md5 } from 'ldap-passwords'

export default defineEventHandler(async (event) => {
	setResponseHeaders(event, { 'Access-Control-Allow-Origin': '*' })
	const { password } = getQuery(event) as { password: string }
	return md5(password)
})
