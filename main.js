function tahunKabisat(tahun) {
    if ((tahun % 4 == 0 && tahun % 100 != 0) || (tahun % 400 == 0)) {
        return `Tahun ${tahun} adalah tahun kabisat`
    } else {
        return `Tahun ${tahun} bukan tahun kabisat`
    }
}

for ( let i = 1700; i <= 2024; i+=4) {
    if ( i == 1700 || i == 1800) {
        `Tahun ${i} bukan tahun kabisat`
    }
    console.log(tahunKabisat(i))
}

// 1700 dan 1800 bukan tahun kabisat