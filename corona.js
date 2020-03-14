var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "פופיק"
words[2] = "סוסו&סאנז"
words[3] = "נתקעת עם צרפתי במעלית המקולקלת"
words[4] = "מהשומר הארגנטינאי"
words[5] = "בזמן שחיכית בלובי עם בובה לעידו שיביא את המכונית"
words[6] = "מהפילטר של התמי4"
words[7] = "עברת ליד עידן כשחזר מווגאס"
words[8] = "אקספו-אקספו"
words[9] = "צילומים של האינסיידר"
words[10] = "פגישה עם לקוח"
words[11] = "בהופעה של בן בן-ברוך"
words[12] = "הקרנת עיתונאים"
words[13] = "מסיבת עיתונאים"
words[14] = "בהאפי-האוור"
words[15] = "נגעת בידית ההפוכה אחרי שסיני נגע בה"
words[16] = "הדגל הסיני במשרד ליד המטבח"
words[17] = "'מהמפגר של 'סלטים"
words[18] = "מכונת הקפה של הסוויטה"
words[19] = "פיקסל"
words[20] = "בובה"
words[21] = "רונן"
words[22] = "בתור בלחמים"
words[23] = "מהשליח של וולט"
words[24] = "הנבגים בחדר המערכת"
words[25] = "האלימים הדביקו אותך"
words[26] = "באבל-דן"
words[27] = "נגעת בקוד של האתר ולא שטפת ידיים אחר-כך"
words[28] = "בהופעה של גיא מזיג"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}