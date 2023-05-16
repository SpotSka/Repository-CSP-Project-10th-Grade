var AverageIncome = getColumn("College Majors & Incomes", "Median");
var MajorType = getColumn("College Majors & Incomes", "Major_category");
var PercentWomen = getColumn("College Majors & Incomes", "ShareWomen");
var UnemploymentRate = getColumn("College Majors & Incomes", "Unemployment_rate");
var SpecMajor = getColumn("College Majors & Incomes", "Major");

//Filter
var filteredMajor = [];
var filteredPW = [];
var filteredIncome = [];
var filteredUR = [];
var filteredSpecmajor = [];
//Filter Income
var MaxINC = 0;
var MostINCName;
var MinINC = 0;
var LeastINCName;
//Filter Unemployment
var MaxUR = 0;
var MaxURname;
var MinUR = 0;
var MinURname;
// Filter 
var MaxSOW = 0;
var MaxSowName;
var MinSOW = 0;
var MinSOWName;

//Takes to specific screen for income, unemployment, or % of women
onEvent("medianincomeButton1", "click", function( ) {
  setScreen("MedianIncomeScreen1");
});
onEvent("unemploymentButton1", "click", function( ) {
  setScreen("UnemploymentRateScreen1");
});
onEvent("femaleratioButton1", "click", function( ) {
  setScreen("ShareofWomenScreen1");
});



//Dropdown that selects broad major 
onEvent("dropdownincome", "change", function( ) {
  filter(getText("dropdownincome"));
  FindLeastIncome();
  FindMostIncome();
});
onEvent("dropdownUR", "change", function( ) {
  filter(getText("dropdownUR"));
  FindLeastUnemployment();
  FindMostUnemployment();
});
onEvent("dropdownSOW", "change", function( ) {
  filter(getText("dropdownSOW"));
  FindLeastShareWomen();
  FindLargestShareWomen();
});





//Filters using a parameter 
function filter(parameter) {
  filteredSpecmajor = [];
  filteredMajor = [];
  filteredPW = [];
  filteredIncome = [];
  filteredUR = [];
  for (var i = 0; i < MajorType.length; i++) {
    if (MajorType[i] == parameter) {
      appendItem(filteredSpecmajor, SpecMajor[i]);
      appendItem(filteredPW, PercentWomen[i]);
      appendItem(filteredIncome, AverageIncome[i]);
      appendItem(filteredUR, UnemploymentRate[i]);
    }
  }
}
//Finds most income of specfic job in broad major selected by user
//A broad major is the broad category of majors, example is engineering or education.
//A specific job is a specfic job in a broad category.EX: Petroleum engineering in the engineering major.
function FindMostIncome() {
  MaxINC = 0;
  MostINCName = "";
  for (var i = 0; i < filteredSpecmajor.length; i++) {
    if (filteredIncome[i] > MaxINC) {
      MaxINC = filteredIncome[i];
      MostINCName = filteredSpecmajor[i];
    }
  }
  setText("MostIncText", ((("The job with the highest average income in " + getText("dropdownincome")) + " is " + MostINCName) + " at " + MaxINC) + "$ a year.");
}
//Finds least income of specfic job in broad major selected by user
function FindLeastIncome() {
   MinINC = 111000;
   LeastINCName = "";
   for (var i = 0; i < filteredSpecmajor.length; i++) {
    if (filteredIncome[i] < MinINC) {
      MinINC = filteredIncome[i];
      LeastINCName = filteredSpecmajor[i];
    }
  }
  setText("LeastIncText", ((("The job with the lowest average income in " + getText("dropdownincome")) + " is " + LeastINCName) + " at " + MinINC) + "$ a year.");
}
//Finds greatest unemployment rate of specifc job in broad major selected by user
function FindMostUnemployment() {
  MaxUR = 0;
  MaxURname = "";
  for (var i = 0; i < filteredSpecmajor.length; i++) {
    if (filteredUR[i] > MaxUR) {
      MaxUR = filteredUR[i];
      MaxURname = filteredSpecmajor[i];
    }
  }
  setText("MostURtext", ((("The job with the highest unemployment rate in " + getText("dropdownUR")) + " is " + MaxURname) + " at " + MaxUR * 100) + "%.");
}
//Finds lowest unemployment rate of specifc job in broad major selected by user
function FindLeastUnemployment() {
  MinUR = 	0.177226407;
  MinURname = "";
  for (var i = 0; i < filteredSpecmajor.length; i++) {
    if (filteredUR[i] < MinUR) {
      MinUR = filteredUR[i];
      MinURname = filteredSpecmajor[i];
    }
  }
  setText("LowestURtext", ((("The job with the lowest unemployment rate in " + getText("dropdownUR")) + " is " + MinURname) + " at " + MinUR * 100) + "%.");
}
//Finds largest share of women in specific job of broad major selected by user
function FindLargestShareWomen() {
  MaxSOW = 0;
  MaxSowName = "";
  for (var i = 0; i < filteredSpecmajor.length; i++) {
    if (filteredPW[i] > MaxSOW) {
      MaxSOW = filteredPW[i];
      MaxSowName = filteredSpecmajor[i];
    }
  }
  setText("MostSOWtext", (((("The job with the largest share of women in " + getText("dropdownSOW")) + " is " + MaxSowName) + " at ") + MaxSOW * 100) + "%.");
}
//Finds smallest share of women in specific job of broad major selected by user
function FindLeastShareWomen() {
  MinSOW = 0.923745479;
  MinSOWName = "";
  for (var i = 0; i < filteredSpecmajor.length; i++) {
    if (filteredPW[i] < MinSOW) {
      MinSOW = filteredPW[i];
      MinSOWName = filteredSpecmajor[i];
    }
  }
  setText("LeastSOWText", ((((("The job with the smallest share of women in " + getText("dropdownSOW")) + " is ") + MinSOWName) + " at ") + MinSOW * 100) + "%.");
}

//Button that when pressed takes user back to home screen
onEvent("HomebuttonSOW1", "click", function( ) {
  setScreen("HomeScreen1");
});
onEvent("HomebuttonMIS1", "click", function( ) {
  setScreen("HomeScreen1");
});
onEvent("HomebuttonURS1", "click", function( ) {
  setScreen("HomeScreen1");
});
