import { verifySha512 } from 'ldap-sha512'

export default defineEventHandler(async (event) => {
	const { cryptPassword, password } = (await readBody(event)) as { cryptPassword: string, password: string }
	return verifySha512(password, cryptPassword)
})
