
const button = document.querySelector('button')
button.addEventListener('click',() => {
const input = document.querySelector('.input').value;
let h1 = document.querySelector('.img');
h1.innerHTML = ""
if(input === 'malarial'){
 let p =document.querySelector('.sicknesSoln');
  p.innerHTML = "quinine is recommended by pharmaceutical"
}
else if(input ===  'covid 19'){
  let p =document.querySelector('.sicknesSoln');
   p.innerHTML = "call your health care provider immediately if your have any danger sign :difficulty  breathing,loss of speech or mobility, confusion or chest pain"
 }
else if ( input === 'fever'){
  let p =document.querySelector('.sicknesSoln');
  p.innerHTML = "Take over-the-counter medications like acetaminophen and ibuprofen to reduce fever."
}
 else if(input === 'headech'){
  let p =document.querySelector('.sicknesSoln');
   p.innerHTML = "Rest in a quiet, dark room. Hot or cold compresses to your head or neck.Massage and small amounts of caffeine.Over-the-counter medications such as ibuprofen (Advil, Motrin IB, others), acetaminophen (Tylenol, others) and aspirin"
 }
 else if(input === 'HIV/AID'){
  let p =document.querySelector('.sicknesSoln');
   p.innerHTML = "abacavir (Ziagen), tenofovir (Viread), emtricitabine (Emtriva), lamivudine (Epivir) and zidovudine (Retrovir). Combination drugs also are available, such as emtricitabine/tenofovir (Truvada) and emtricitabine/tenofovir alafenamide (Descovy) but one of the best alternative is to see a medical doctor"
 }
 else if(input === 'sleeping'){
  let p =document.querySelector('.sicknesSoln');
   p.innerHTML = "gambiense infection, is available in the United States. The other drugs (suramin, melarsoprol, eflornithine, and nifurtimox when used in combination with eflornithine) used to treat African trypanosomiasis are not commercially available in the United States but can be obtained from CDC"
 }
 else if(input === 'high blood preasure'){
  let p =document.querySelector('.sicknesSoln');
   p.innerHTML = "go to a medical hospital and get consulted"
 }
 else if(input === 'Refractive Errors' ){
  let p =document.querySelector('.sicknesSoln');
   p.innerHTML = "You may choose to have surgery (LASIK) to correct your vision. If you already have glasses, you may need a stronger prescription. Other, more serious conditions also happen as you age. Eye diseases like macular degeneration, glaucoma, and cataracts, can cause vision problems"
 }
 else if(input === 'rice-water stools' || "vomiting" || "vomiting" || "leg cramps" || "restlessness or irritability"){
  let p =document.querySelector('.sicknesSoln');
   p.innerHTML = "go to the hospital get consulted"
 }
 else if(input === 'jkhlhjl'){
  let p =document.querySelector('.sicknesSoln');
   p.innerHTML = "jhljk"
 }
 else if(input === 'jklh'){
  let p =document.querySelector('.sicknesSoln');
   p.innerHTML = "jkhll"
 }
})


