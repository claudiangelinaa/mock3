function lelangArr(num) {
    let barangLelang = [
        {namaBarang : "Baju", harga : 10000},
        {namaBarang : "Celana", harga : 20000},
        {namaBarang : "Kacamata", harga : 30000}
    ]

    let productListString = `Di menit ke ${num} Product Info\n`
    for (let i = 1; i <= num; i++) {
        barangLelang.forEach(function(element) {
            if (element.namaBarang == "Baju") {
                element.harga = Math.ceil(element.harga * 110/100)
            } else if (element.namaBarang == "Celana") {
                element.harga = Math.ceil(element.harga * 120/100)
            } else {
                element.harga = Math.ceil(element.harga * 130/100)
            }

            if (i == num) {
                productListString += `Nama barang = ${element.namaBarang}, harga = Rp ${element.harga}\n`
            }
        });
    }
    return productListString
}

console.log(lelangArr(1))
console.log(lelangArr(5))
console.log(lelangArr(10))