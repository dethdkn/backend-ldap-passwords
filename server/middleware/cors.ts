export default defineEventHandler((event) => {
	setHeaders(event, { 'Access-Control-Allow-Origin': 'https://backend.ldap-passwords.com', 'Access-Control-Allow-Methods': 'GET, POST', 'Access-Control-Allow-Headers': 'Content-Type' })
})
