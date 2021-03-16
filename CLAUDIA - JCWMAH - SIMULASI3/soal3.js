function cekKoin(koin){
    

    let pecahan25 = 25
    let pecahan10 = 10
    let pecahan5 = 5
    let pecahan1 = 1

    let n25 = Math.floor(koin/pecahan25)
    let sisaN25 = Math.floor(koin-(n25*pecahan25))
    let n10 = Math.floor(sisaN25/pecahan10)
    let sisaN10 = Math.floor(sisaN25-(n10*pecahan10))
    let n5 = Math.floor(sisaN10/pecahan5)
    let sisaN5 = Math.floor(sisaN10-(n5*pecahan5))
    let n1 = Math.floor(sisaN5/pecahan1)
    
    console.log(`Koin senilai ${koin} terdiri dari ${n25 + n10 + n5 + n1} koin yaitu ${n25}keping 25sen, ${n10}keping 10sen, ${n5}keping 5sen dan ${n1}keping 1sen.`)

}
cekKoin(31)