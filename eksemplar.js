/* 
Seorang penjual buku pelajar smk berusaha menarik pembeli dengan ketentuan sbb:
- jika jumlah buku yang dibeli lebih kecil atau sama dengan 100 eksemplar, maka tidak ada diskon,
- jika jumlah buku yang dibeli lebih besar dari 100 dan kurang dari atau sama dengan 200 eksemplar maka untuk 100 eksemplar yang pertama dapat diskon 5% sedangkan sisanya mendapat diskon 15%
- jika jumlah buku ynag dibeli lebih besar dari 200 eksemplar maka 100 eksemplar pertama diskon 7% 100 eksemplar kedua diskon 17% dan sisanya diskon 27%

- jika harga satu eksemplar buku Rp. 5000, buatlah program untuk menentukan Harga total yang Harga dibayar dengan inputan berupa jumlah buku yang di beli
*/

function countTotalPrice(jumlah) {
    const hargaSatuan = 5000
    const eksemplar = jumlah * 10

    if (eksemplar <= 100) {
        return eksemplar * hargaSatuan
    } else if (eksemplar > 100 && eksemplar <= 200) {
        const diskon100 = 0.05
        const diskonSisa = 0.15
        const harga100 = 100 * hargaSatuan * (1 - diskon100);
        const hargaSisa = (eksemplar - 100) * hargaSatuan * (1 - diskonSisa);
        // console.log('harga sisa' + harga100)
        return harga100 + hargaSisa;
    } else {
        const diskon100 = 0.07;
        const diskon200 = 0.17;
        const diskonSisa = 0.27;
        const harga100 = 100 * hargaSatuan * (1 - diskon100);
        const harga200 = 100 * hargaSatuan * (1 - diskon200);
        const hargaSisa = (eksemplar - 200) * hargaSatuan * (1 - diskonSisa);
        return harga100 + harga200 + hargaSisa;
    }
}

const hargaTotal = countTotalPrice(11);
console.log(`Harga total yang harus dibayar adalah Rp ${hargaTotal.toLocaleString('id-ID', {maximumFractionDigits: 3})}`);
