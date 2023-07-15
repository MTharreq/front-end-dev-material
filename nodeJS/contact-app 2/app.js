const yargs = require('yargs')
const { simpanContact, listContact, detailContact, deleteContact } = require('./contacts')

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'No HP',
            demandOption: true,
            type: 'string'
        },
    },

    handler(argv) {
        simpanContact(argv.nama, argv.email, argv.noHP)
    }
}).demandCommand()

// menampilkan semua daftar nama & no contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no HP contact',
    handler(){
        listContact()
    }
})

// menampilkna detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        detailContact(argv.nama)
    }
})

// menghapus kontak berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        deleteContact(argv.nama)
    }
})

yargs.parse()