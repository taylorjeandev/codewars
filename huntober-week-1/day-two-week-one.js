function removeUpToC (str) {
    let s = str.slice(733).replace(/Eek!/gi, "");
    console.log(s.split("").reverse().join(""));

}    


// Split this string up on *lowercase* 'V'. The first character in each substring besides this first one is what you need to remember for tomorrow's task. 

function finalAnswer(str) {
    console.log(str.split("v"));
}

// "vS.A-#IYbSEkiQS5Sn@tq!CcG;+:^myl%CJcWzUZ;vpZQP*nH1KA*GRFI+B/xHR:><%&4.zf*2+Ey0x-#Kci LGcoOz3XKA)SAZ/j>T3sT=~kVs !6=B_Yei~@5~Gn)Q?Q7zI4yqfgXeTsdi9ga43?w^oC~KMqw8i02WHHm%-0QdTBJEum%@R_?,dJk 2t5QmgZRN8xW$fQ@Ge>tub)Ep1YjX()dpD3ru1(Q<8m?vaotN<SqFz-7z8fDWj7s|=UR*E:/CYLzj*?K:uCUmhkASg8;H^/%<HU%>=hhPpLPdb|fBAMvcA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xuveA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xu"

const answer = 'Space'