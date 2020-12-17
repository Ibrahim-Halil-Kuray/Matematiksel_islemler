

let numberArray=[1,2,3,4,5,6,7,8,9,10];

let elemanAdedi=numberArray.length;
let sayilarinToplami=0;

console.log("En buyuk sayi",Math.max(1,2,3,4,5,6,7,8,9,10));
console.log("En kucuk sayi",Math.min(1,2,3,4,5,6,7,8,9,10));

for(sayac=0; sayac<elemanAdedi; sayac++){
    
    let sayi=numberArray[sayac];

    sayilarinToplami=sayilarinToplami+sayi;
}

let sayilarinOrtalamasi= sayilarinToplami/numberArray.length;

console.log("Toplam=",sayilarinToplami);
console.log("Ortalama",sayilarinOrtalamasi);

for(sayac=0; sayac<elemanAdedi; sayac++){
    console.log("karesini al",numberArray[sayac],(numberArray[sayac]*numberArray[sayac]));
}

for(let sayac=0; sayac<elemanAdedi; sayac++){
    console.log(Math.sqrt(numberArray[sayac]));
}






/*
let k=9;
console.log(k*k);
console.log(Math.sqrt(k));*/















