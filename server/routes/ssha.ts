import { ssha } from 'ldap-passwords'

export default defineEventHandler(async (event) => {
	setResponseHeaders(event, { 'Access-Control-Allow-Origin': '*' })
	const { password } = getQuery(event) as { password: string }
	return ssha(password)
})
