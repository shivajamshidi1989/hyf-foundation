dogYearOfBirth= 2015
dogYearFuture= 2035
dogYear= dogYearFuture - dogYearOfBirth
shouldShowResultInDogYears= boolean(true)

if (shouldShowResultInDogYears) {
  console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture)
}
else {
  console.log("Your dog will be " + dogYear/7 + " human years old in " + dogYearFuture)
}