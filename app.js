const csvData = `id,pytanie,odpowiedz a,odpowiedz b,odpowiedz c,odpowiedz d,poprawna odpowiedz
1,Strategicznym celem zarządzania kapitałem w przedsiębiorstwie jest:,Maksymalizacja wartości kapitału,Maksymalizacja rentowności kapitału,Minimalizacja kosztu kapitału,Optymalizacja struktury kapitału,d
2,Koszt kapitału własnego przedsiębiorstwa wynika z:,Ponoszenia przez właściciela tzw. kosztu alternatywnego,Oprocentowania tego kapitału,Obowiązujących zasad prowadzenia rachunkowości,Konieczności wypłacania odsetek właścicielom tego kapitału,
3,Efekt dźwigni finansowej jest związany z:,Dążeniem do minimalizacji kosztu kapitału,Dążeniem do maksymalizacji operacyjnej rentowności kapitału,Kształtowaniem kosztu kapitału własnego,Dążeniem do optymalizacji struktury kapitałowej,
4,Obligacja zerokuponowa to:,Obligacja przy której występuje wypłata odsetek,Obligacja z kuponami odsetkowymi,Obligacja bez kuponów odsetkowych,"Obligacja, przy której cena wykupu jest niższa od ceny emisyjnej",
5,Instrumentami finansowania własnego-zewnętrznego mogą być:,"zyski reinwestowane, emisja akcji","emisja akcji, venture capital","venture capital, amortyzacja","amortyzacja, zyski reinwestowane",
6,Stopa procentowa może wyrażać:,bezwzględny dochód z inwestycji,bezwzględne ujęcie ceny pieniądza,względne ujęcie ceny pieniądza,wielkość zysku przedsiębiorstwa,
7,Model Gordona jest wykorzystywany dla celów:,szacowania teraźniejszej wartości akcji uprzywilejowanej,szacowania teraźniejszej wartości akcji zwykłej,szacowania ryzyka inwestycyjnego,szacowania wymaganej stopy zwrotu,
8,Ryzyko operacyjne jest związane z :,Kształtowaniem się kosztów stałych i zmiennych,Sferą zarządzania operacyjnego przedsiębiorstwem,Strukturą źródeł finansowania działalności operacyjnej przedsiębiorstwa,Strukturą operacyjnego majątku przedsiębiorstwa,
9,Stopa dywidendy informuje bezpośrednio o:,Opłacalności inwestowania w akcje,Kwocie wypłacanej dywidendy,Udziale dywidendy w zysku netto,Tempie wzrostu dywidendy,
10,Współczynnik ‘β’(ryzyka inwestycyjnego) w postaci relewarowanej oznacza:,Poziom ryzyka dla przedsiębiorstwa średnio zadłużonego,Poziom ryzyka dla przedsiębiorstwa niezadłużonego,Poziom ryzyka dla przedsiębiorstwa zadłużonego,Poziom ryzyka przeciętnego w danej branży,
11,Ryzyko finansowe jest związane z:,Kształtowaniem się kosztów stałych i zmiennych,Całą sferą zarządzania finansami przedsiębiorstwa,Doborem źródeł finansowania przedsiębiorstwa,Strukturą majątku przedsiębiorstwa,
12,Zaciągnięcie przez inwestora kredytu na sfinansowanie realizacji inwestycji powoduje:,Spadek przepływów pieniężnych przedsięwzięcia inwestycyjnego w okresie jego realizacji,Wzrost przepływów pieniężnych przedsięwzięcia inwestycyjnego w okresie jego eksploatacji,Wzrost przepływów pieniężnych przedsięwzięcia inwestycyjnego w okresie jego realizacji,Nie ma wpływu na przepływy pieniężne przedsięwzięcia inwestycyjnego?,
13,"Mamy dwie inwestycje: A i B. Jeżeli NPV(A)>NPV(B) oraz IRR(A)<IRR(B), to ta sytuacja oznacza, że:",Inwestycja A jest bezwzględnie nieefektywna,Inwestycja B jest bezwzględnie nieefektywna,"Obie inwestycje mogą być bezwzględnie efektywne, ale ryzyko przy A większe niż ryzyko",przy B,
14,Niedobór kapitału obrotowego netto może zostać obniżony poprzez:,Wydłużenie okresu inkasa należności,Wydłużenie okresu płatności zobowiązań,Wydłużenie okresu utrzymywanych zapasów,Wydłużenie cyklu środków pieniężnych,
15,Obligatariusz to:,Emitent obligacji,Gwarant emisji obligacji,Posiadacz obligacji,Podmiot wykupujący obligacje od pożyczkodawców,
16,Instumentami finansowania własnego-wewnętrznego mogą być:,"zyski reinwestowane, emisja akcji","emisje akcji, venture capital","Venture capital, amortyzacja","amortyzacja, zyski reinwestowane",
17,Obligacja dyskontowa to:,"Obligacja, przy której występuje dyskontowanie odsetek","obligacja, przy której występuje dyskontowanie kwoty wykupu obligacji",obligacja sprzedawana po cenie emisyjnej niższej od wartości nominalnej,obligacja sprzedawana po cenie emisyjnej wyższej od wartości nominalnej,
18,Do instrumentów pozyskiwania kapitału własnego-zewnętrznego zaliczamy:,Zysk reinwestowany i emisję akcji,Emisję akcji i kredyt bankowy,Amortyzację i emisję udziałów,Emisję udziałów i venture capital,
19,Kapitał finansowy przedsiębiorstwa to:,Finansowe aktywa przedsiębiorstwa,Środki pieniężne przedsiębiorstwa,Źródła finansowania przedsiębiorstwa,Inwestycje przedsiębiorstwa,
20,Leasing zwrotny to:,"Rodzaj leasingu, przy którym przedmiot leasingu wraca po zakończeniu umowy do",leasingodawcy,"Rodzaj leasingu, przy którym przedmiot leasingu wraca po zakończeniu umowy do",swojego właściciela,
21,Cechą leasingu finansowego jest m.in.:,Możliwość zaliczenia całej raty leasingowej jako kosztu przedsiębiorstwa,Transfer własności przedmiotu leasingu na rzecz leasingobiorcy po podpisaniu umowy,Brak prawa do naliczania amortyzacji przez leasingobiorcę,Prawo leasingobiorcy do pierwokupu przedmiotu leasingu po zakończeniu umowy,
22,Możliwość wykorzystania kapitału obcego przez przedsiębiorstwo jest m.in. uzależniona od:,Skłonności przedsiębiorstwa do podejmowania ryzyka operacyjnego,Obowiązujących regulacji prawnych w zakresie wykorzystania różnych form pozyskiwania,kapitału,Skłonności przedsiębiorstwa do podejmowania ryzyka finansowego,
23,Kapitał rzeczowy przedsiębiorstwa to:,Środki trwałe przedsiębiorstwa,Aktywa ogółem przedsiębiorstwa,Inwestycje przedsiębiorstwa,Aktywa rzeczowe przedsiębiorstwa,
24,"Funkcja kreatywna kapitału oznacza, że:",Każde wykorzystanie kapitału kreuje jego wartość,Zainwestowanie kapitału kreuje wartość przedsiębiorstwa,Kapitał jest kreatorem strategii przedsiębiorstwa,Zainwestowanie kapitału stanowi warunek kreowania działalności gospodarczej,
25,Równania Hamady znajdują zastosowanie w celu:,Szacowania kosztu kapitału własnego w oparciu o koncepcję rynkową,Szacowania rynkowej premii za ryzyko,Szacowania kosztu kapitału własnego w oparciu o koncepcję dywidendową,Szacowania kosztu kapitału obcego,
26,Metoda annuitetowa spłaty kredytu polega na:,Spłacaniu kredytu przy malejących ratach kapitałowych,Spłacaniu kredytu przy rosnących odsetkach,Spłacaniu kredytu przy równych ratach kapitałowych,Spłacaniu kredytu przy rosnących ratach kapitałowych,
27,Wzrost rentowności kapitału własnego jest dla przedsiębiorstwa:,Zawsze korzystny,"Korzystny pod warunkiem, że towarzyszy temu obniżenie kosztu kapitału własnego","Korzystny pod warunkiem, że towarzyszy temu obniżenie kosztu kapitału","Korzystny pod warunkiem, że towarzyszy temu wzrost rentowności operacyjnej kapitału",
28,Oddziaływanie kapitału intelektualnego na efektywność przedsiębiorstwa wyraża się w:,Każdym wzroście wartości rynkowej przedsiębiorstwa,Rosnącej wartości kapitału własnego przedsiębiorstwa,Rosnącej wartości majątku przedsiębiorstwa,Rosnącej różnicy pomiędzy wartością rynkową a wartością księgową przedsiębiorstwa,
29,Parametrem mikroekonomicznym w rynkowej koncepcji szacowania kosztu kapitału własnego jest:,Stopa zwrotu z inwestycji wolnych od ryzyka,Współczynnik ryzyka inwestycyjnego,Rynkowa premia za ryzyko,Rynkowa stopa zwrotu,
30,Metoda rat malejących spłaty kredytu polega na:,Spłacaniu kredytu przy malejących ratach kapitałowych,Spłacaniu kredytu przy rosnących ratach kapitałowych i malejących odsetkach,Spłacaniu kredytu przy rosnących ratach kapitałowych,Spłacaniu kredytu przy równych ratach kapitałowych,
31,Model CAPM służy m.in. do:,Szacowania ryzyka inwestycyjnego,Szacowania kosztu kapitału obcego,Szacowania stopy zwrotu z inwestycji wolnych od ryzyka,Szacowania kosztu kapitału własnego,
32,"Dodatni stopień dźwigni finansowej ma miejsce, gdy:",Koszt kapitału obcego jest niższy niż skorygowana rentowność kapitału,Rentowność kapitału własnego jest dodatnia,Koszt kapitału obcego jest niższy niż koszt kapitału własnego,Koszt kapitału obcego jest niższy niż rentowność kapitału własnego,
33,Do hybrydowych instrumentów pozyskiwania kapitału zaliczamy:,Emisję akcji i emisję obligacji,Emisję obligacji i konwersję zadłużenia,Emisję obligacji zamiennych na akcje,Emisję akcji i konwersję zadłużenia,
34,Współczynnik beta w postaci odlewarowanej oznacza:,Poziom ryzyka przeciętnego w danej branży,Poziom ryzyka dla przedsiębiorstwa średnio zadłużonego,Poziom ryzyka dla przedsiębiorstwa zadłużonego,Poziom ryzyka dla przedsiębiorstwa niezadłużonego,
35,Do instrumentów pozyskiwania kapitału własnego wewnętrznego zaliczamy:,Zysk reinwestowany i emisję akcji,Venture capital i amortyzację,Amortyzację i zysk reinwestowany,Emisję akcji i kredyt bankowy,
36,"Ujemny stopień dźwigni finansowej ma miejsce, gdy:",Koszt kapitału obcego jest wyższy niż rentowność kapitału własnego,Rentowność kapitału własnego jest ujemna,Koszt kapitału obcego jest wyższy niż skorygowana rentowność kapitału,Koszt kapitału obcego jest wyższy niż koszt kapitału własnego,
37,Efekt osłony podatkowej wpływa na:,Koszt kapitału własnego przedsiębiorstwa,Operacyjną rentowność kapitału przedsiębiorstwa,Przeciętne oprocentowanie kapitału obcego przedsiębiorstwa,Koszt kapitału obcego przedsiębiorstwa,
38,Operacyjna rentowność kapitału przedsiębiorstwa zależy od (finansowa zależy od efektu dźwigni finansowej):,Efektywności w sferze operacyjnej i struktury kapitałowej przedsiębiorstwa,Struktury kapitałowej przedsiębiorstwa oraz stopy podatku dochodowego,Efektywności w sferze operacyjnej przedsiębiorstwa oraz stopy podatku dochodowego,Efektywności w sferze operacyjnej przedsiębiorstwa,
39,"Wzrost udziału kapitału obcego w strukturze kapitałowej przedsiębiorstwa jest uzasadniony, gdy:",Prowadzi to do obniżenia WACC przedsiębiorstwa,Prowadzi to do wzrostu zysku netto,Prowadzi to do wzrostu rentowności kapitału własnego,Prowadzi to do wzrostu skorygowanej rentowności kapitału,
40,Strategię umiarkowaną zarządzania kapitałem w przedsiębiorstwie cechuje:,Występowanie kapitałowej bariery rozwoju przedsiębiorstwa,Równowaga kapitałowa pomiędzy kapitałem własnym a kapitałem obcym,Wysoki poziom ryzyka finansowego,Silny wpływ efektu dźwigni finansowej na rentowność kapitału własnego,
41,Efekt osłony podatkowej powoduje w przedsiębiorstwie:,Obniżenie kosztu kapitału własnego,Obniżenie przeciętnego oprocentowania kapitału obcego,Obniżenie kosztu kapitału obcego,Wzrost operacyjnej rentowności kapitału,
42,"Funkcja strategiczna kapitału oznacza, że:",Kapitał odgrywa strategiczną rolę w przedsiębiorstwie,Dobór kapitałów jest podstawą formułowania jednej ze strategii przedsiębiorstwa,Dobór kapitałów to inaczej strategia przedsiębiorstwa,Kapitał jest podstawą zarządzania strategicznego przedsiębiorstwem,
43,Do instrumentów pozyskiwania kapitału obcego przez przedsiębiorstwo zaliczamy:,Leasing i reinwestowanie zysku,Emisję obligacji zamiennych na akcje,Emisję akcji i emisję obligacji,Emisję obligacji i leasing,
44,"Funkcja kosztowa kapitału oznacza, że:","Przedsiębiorstwo ponosi koszt kapitału, który jest jego kosztem księgowym",Koszty kapitału własnego i kapitału obcego pomniejszają zysk przedsiębiorstwa,Koszt kapitału wynika z odsetek płaconych przez przedsiębiorstwo,Kapitał własny i kapitał obcy generują koszty kapitału,
45,Czynnikami kształtującymi koszt kapitału obcego przedsiębiorstwa są:,Oprocentowanie i struktura kapitału obcego,Przeciętne oprocentowanie i struktura kapitału obcego,Przeciętne oprocentowanie kapitału obcego i efekt osłony podatkowej,Efekt osłony podatkowej i efekt dźwigni finansowej,
46,Strategię agresywną zarządzania kapitałem w przedsiębiorstwie cechuje:,Występowanie kapitałowej bariery rozwoju przedsiębiorstwa,Równowaga kapitałowa pomiędzy kapitałem własnym a kapitałem obcym,Silny wpływ efektu dźwigni finansowej na rentowność kapitału własnego,Niski poziom ryzyka finansowego,
47,Wykorzystanie rachunku kosztu kapitału dla potrzeb szacowania stopy dyskontowej polega na:,Przyjęciu stopy dyskontowej jako równej średniemu ważonemu kosztowi kapitału,Wyznaczeniu stopy dyskontowej w oparciu o równania Hamady,Wyznaczeniu stopy dyskontowej jako elementu rachunku kosztu kapitału,Wyznaczeniu stopy dyskontowej na podstawie średniego ważonego kosztu kapitału,
48,Kapitał intelektualny przedsiębiorstwa obejmuje:,Wyłącznie kapitał ludzki,Kapitał rzeczowy i kapitał finansowy,Kapitał ludzki i kapitał strukturalny,Kapitał ludzki i kapitał realny,
49,Koncepcja dywidendowa szacowania kosztu kapitału polega na:,Uznaniu dywidendy jako finansowej korzyści z zainwestowanego kapitału,Wpływie stopy dywidendy na koszt kapitału obcego,Wpływie stopy dywidendy na koszt kapitału własnego,Wyznaczaniu rynkowej stopy zwrotu w oparciu o stopę dywidendy,
50,Skorygowana rentowność kapitału przedsiębiorstwa informuje bezpośrednio o:,Rzeczywistej stopie zwrotu netto z jego kapitału,Hipotetycznej stopie zwrotu netto z jego kapitału własnego,Rzeczywistej stopie zwrotu netto z jego kapitału własnego,Hipotetycznej stopie zwrotu netto z jego kapitału,`;

const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");
const resetBtn = document.getElementById("reset-btn");
const progressText = document.getElementById("progress-text");
const knownText = document.getElementById("known-text");
const scoreText = document.getElementById("score-text");
const progressBar = document.getElementById("progress-bar");
const questionTitle = document.getElementById("question-title");
const questionMeta = document.getElementById("question-meta");
const optionsList = document.getElementById("options-list");
const feedbackEl = document.getElementById("feedback");

const optionKeys = ["a", "b", "c", "d"];

const parseCsv = (text) => {
  const rows = [];
  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"' && nextChar === '"') {
      current += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    if (char === "\n" && !insideQuotes) {
      rows.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  if (current.trim() !== "") {
    rows.push(current);
  }

  return rows.map((row) => {
    const values = [];
    let buffer = "";
    let quoted = false;

    for (let i = 0; i < row.length; i += 1) {
      const char = row[i];
      const nextChar = row[i + 1];

      if (char === '"' && nextChar === '"') {
        buffer += '"';
        i += 1;
        continue;
      }

      if (char === '"') {
        quoted = !quoted;
        continue;
      }

      if (char === "," && !quoted) {
        values.push(buffer);
        buffer = "";
        continue;
      }

      buffer += char;
    }

    values.push(buffer);
    return values;
  });
};

const rows = parseCsv(csvData);
const dataRows = rows
  .slice(1)
  .filter((row) => row.some((cell) => cell.trim() !== ""))
  .map((row) => {
    if (row.length <= 7) {
      return row;
    }

    const head = row.slice(0, 3);
    const tail = row.slice(-3);
    const middle = row.slice(3, -3).join(",").trim();

    return [...head, middle, ...tail];
  });

const questions = dataRows.map((row, index) => {
  const [id, question, a, b, c, d, correct] = row;
  const normalizedCorrect = (correct || "").trim().toLowerCase();

  return {
    id: id ? id.trim() : String(index + 1),
    question: question ? question.trim() : "",
    options: [a, b, c, d].map((value) => (value || "").trim()),
    correct: optionKeys.includes(normalizedCorrect) ? normalizedCorrect : null,
  };
});
const totalQuestions = questions.length;
const knownTotal = questions.filter((q) => q.correct).length;

let currentIndex = 0;
let correctCount = 0;
let knownAnswered = 0;

knownText.textContent = `Z poprawną odpowiedzią: ${knownTotal}`;

const updateHeader = () => {
  if (currentIndex >= totalQuestions) {
    progressText.textContent = "Koniec quizu";
    progressBar.style.width = "100%";
  } else {
    progressText.textContent = `Pytanie ${currentIndex + 1} / ${totalQuestions}`;
    const progressValue =
      totalQuestions === 0 ? 0 : ((currentIndex + 1) / totalQuestions) * 100;
    progressBar.style.width = `${progressValue}%`;
  }

  scoreText.textContent = `Poprawne: ${correctCount}/${knownAnswered}`;
};

const resetFeedback = () => {
  feedbackEl.className =
    "mt-6 hidden rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm";
  feedbackEl.textContent = "";
};

const createOption = (optionKey, optionText) => {
  const label = document.createElement("label");
  label.className =
    "group flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:bg-white/10";

  const input = document.createElement("input");
  input.type = "radio";
  input.name = "answer";
  input.value = optionKey;
  input.className =
    "mt-1 h-4 w-4 cursor-pointer text-emerald-400 focus:ring-emerald-400";

  const text = document.createElement("span");
  text.textContent = `${optionKey.toUpperCase()}. ${optionText}`;

  label.appendChild(input);
  label.appendChild(text);

  input.addEventListener("change", () => {
    checkBtn.disabled = false;
  });

  return label;
};

const renderQuestion = () => {
  updateHeader();
  resetFeedback();

  if (currentIndex >= totalQuestions) {
    questionTitle.textContent = "Koniec quizu";
    questionMeta.textContent = `Ukończono ${totalQuestions} pytań.`;
    optionsList.innerHTML = "";
    checkBtn.classList.add("hidden");
    nextBtn.textContent = "Zacznij od nowa";
    nextBtn.disabled = false;

    feedbackEl.className =
      "mt-6 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100";

    if (knownAnswered === 0) {
      feedbackEl.textContent =
        "Brak pytań z poprawną odpowiedzią w arkuszu — wynik nie może być wyliczony.";
    } else {
      const percentage = Math.round((correctCount / knownAnswered) * 100);
      feedbackEl.textContent = `Wynik końcowy: ${correctCount}/${knownAnswered} (${percentage}%).`;
    }

    feedbackEl.classList.remove("hidden");
    return;
  }

  const question = questions[currentIndex];
  questionTitle.textContent = `${currentIndex + 1}. ${question.question}`;
  questionMeta.textContent = `ID: ${question.id}`;
  optionsList.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const optionKey = optionKeys[optionIndex];
    optionsList.appendChild(createOption(optionKey, option));
  });

  checkBtn.disabled = true;
  checkBtn.classList.remove("hidden");
  nextBtn.disabled = true;
  nextBtn.textContent = "Dalej";
};

const checkAnswer = () => {
  if (currentIndex >= totalQuestions) {
    return;
  }

  const selected = optionsList.querySelector("input:checked");
  if (!selected) {
    feedbackEl.className =
      "mt-6 rounded-xl border border-amber-400/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-100";
    feedbackEl.textContent = "Zaznacz odpowiedź, aby sprawdzić.";
    feedbackEl.classList.remove("hidden");
    return;
  }

  const question = questions[currentIndex];
  const correctKey = question.correct;

  optionsList.querySelectorAll("input").forEach((input) => {
    input.disabled = true;
  });

  if (!correctKey) {
    feedbackEl.className =
      "mt-6 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-200";
    feedbackEl.textContent = "Brak poprawnej odpowiedzi w arkuszu.";
    feedbackEl.classList.remove("hidden");
    checkBtn.disabled = true;
    nextBtn.disabled = false;
    return;
  }

  knownAnswered += 1;
  const correctInput = optionsList.querySelector(
    `input[value="${correctKey}"]`
  );
  if (correctInput) {
    correctInput
      .closest("label")
      .classList.add("border-emerald-400/70", "bg-emerald-500/10");
  }

  if (selected.value === correctKey) {
    correctCount += 1;
    feedbackEl.className =
      "mt-6 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100";
    feedbackEl.textContent = "Poprawnie.";
  } else {
    selected
      .closest("label")
      .classList.add("border-rose-400/70", "bg-rose-500/10");
    feedbackEl.className =
      "mt-6 rounded-xl border border-rose-400/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-100";
    feedbackEl.textContent = `Niepoprawnie. Podpowiedź: poprawna odpowiedź to ${correctKey.toUpperCase()}.`;
  }

  feedbackEl.classList.remove("hidden");
  checkBtn.disabled = true;
  nextBtn.disabled = false;
  updateHeader();
};

const resetQuiz = () => {
  currentIndex = 0;
  correctCount = 0;
  knownAnswered = 0;
  renderQuestion();
};

checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", () => {
  if (currentIndex >= totalQuestions) {
    resetQuiz();
    return;
  }
  currentIndex += 1;
  renderQuestion();
});
resetBtn.addEventListener("click", resetQuiz);

renderQuestion();
