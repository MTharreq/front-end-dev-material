const { tulisPertanyaan, simpanContact } = require('./contacts.js')

const main = async () => {
	const nama = await tulisPertanyaan('Masukan nama anda : ')
	const email = await tulisPertanyaan('Masukan email anda : ')
	const noHP = await tulisPertanyaan('Masukan No HP anda : ')

	simpanContact(nama, email, noHP);
}

main()