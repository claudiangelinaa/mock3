const barangLelang = [
  {
    name: 'Baju',
    price: 10000,
    interest: 1.1,
  },
  {
    name: 'Celana',
    price: 20000,
    interest: 1.2,
  },
  {
    name: 'Kacamata',
    price: 30000,
    interest: 1.3,
  }
]

function lelangArr(time){
  
  return `
  Di menit ke ${time} Product Info
  Nama Barang = ${barangLelang[0].name}, harga = Rp. ${Math.ceil(barangLelang[0].price* Math.pow(barangLelang[0].interest,time))}
  Nama Barang = ${barangLelang[1].name}, harga = Rp. ${Math.ceil(barangLelang[1].price* Math.pow(barangLelang[1].interest,time))}
  Nama Barang = ${barangLelang[2].name}, harga = Rp. ${Math.ceil(barangLelang[2].price* Math.pow(barangLelang[2].interest,time))}
  `
}

console.log(lelangArr(1))
console.log(lelangArr(5))
console.log(lelangArr(10))