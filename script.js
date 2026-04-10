const introText = document.getElementById("introText");
const toggleText = document.getElementById("toggleText");

const shortText =
  "Sveiki atvykę į Vynas ir čeburekai! Čia, pačioje jaukaus Užupio širdyje, mes kuriame ne tik maistą – mes kuriame skanius jausmus ir mažas džiaugsmo akimirkas.";

const fullText = `Sveiki atvykę į Vynas ir čeburekai!
Čia, pačioje jaukaus Užupio širdyje, mes kuriame ne tik maistą – mes kuriame skanius jausmus ir mažas džiaugsmo akimirkas. Mūsų čeburekai – traškūs, sotūs ir aromatingi pyragėliai, pagaminti su meile ir dėmesiu kiekvienai detalei. Nuo klasikinių iki netikėtų skonių – kiekvienas ras kažką sau.

Mes mėgstame dalintis gera nuotaika, todėl prie čeburekų visada rasite vyną, alų ar aromatingą gėrimą, kuris pabrėš skonį ir sukurs šventinę atmosferą.

Ateikite su draugais, su šeima arba tiesiog ramiam vakarui sau. Čia pajusite jaukumą, džiaugsmą ir šilumą – atmosferą, kurioje norisi atrasti naujus skonius ir mėgautis akimirka.

Laukiame jūsų kiekvieną dieną nuo 12:00 iki 23:00.

Vynas ir čeburekai – skanu, linksma, su meile!`;

if (introText && toggleText) {
  let expanded = false;

  toggleText.addEventListener("click", () => {
    expanded = !expanded;
    introText.textContent = expanded ? fullText : shortText;
    toggleText.textContent = expanded ? "less" : "more";
  });
}
