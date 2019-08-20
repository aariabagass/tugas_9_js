var withIn = () => {
  identity = {
    name: "Tukimin",
    age: 88,
    sex: "male",
    occupation: "San Fransisco"
  }
  for (a in identity) {
    console.log(identity[a])
  }
}
withIn();