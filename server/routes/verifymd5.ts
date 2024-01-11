import { verifyMD5 } from 'ldap-md5'

export default defineEventHandler(async (event) => {
	const { cryptPassword, password } = (await readBody(event)) as { cryptPassword: string, password: string }
	return verifyMD5(password, cryptPassword)
})
