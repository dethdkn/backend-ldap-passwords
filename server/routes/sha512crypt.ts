import { sha512Crypt } from 'ldap-sha512'

export default defineEventHandler(async (event) => {
	const { password, salt } = getQuery(event) as { password: string, salt: string }
	return sha512Crypt(password, salt)
})
