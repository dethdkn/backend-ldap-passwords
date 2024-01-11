import { md5 } from 'ldap-md5'

export default defineEventHandler(async (event) => {
	const { password } = getQuery(event) as { password: string }
	return md5(password)
})
