function main() {
   let ask = prompt("Enter an expression")
   try {
      var answer = eval(ask)
      if (answer) {
        alert(`Answer is: ${answer}`)
      }
   } catch {
      alert("Something went wrong.")
   }
}

main()
