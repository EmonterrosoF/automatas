export function recibirCadena(cadena) {
  if (cadena != '') {
    console.log(`la cadena recibida es ${cadena}`);
    let n = cadena.split("");
    let set = new Set(n);
    let nuev = [...set];
    let comprobador = true;
    nuev.forEach((e) => {
      if (e != "a" && e != "b") {
        comprobador = false;
      }
      if (e == " ") {
        console.log("no puedes dejar espacios en blanco");
      }
    });
    
    let validacion = {
      A: {
        a: "B",
        b: "null",
      },
      B: {
        a: "C",
        b: "D",
      },
      C: {
        a: "null",
        b: "E",
      },
      D: {
        a: "F",
        b: "null",
      },
      E: {
        a: "null",
        b: "null",
      },
      F: {
        a: "F",
        b: "null",
      },
    };
    
    let estado = "A";
    let verificar = cadena.replace(/\s+/g, "");
    
    if (comprobador) {
      let cad = verificar.split("");
      console.log(cad);
      let i = 1;
      cad.forEach((simbolo) => {
        switch (estado) {
          case "A":
            estado = validacion["A"][simbolo];
            console.log(validacion["A"][simbolo]);
            break;
          case "B":
            estado = validacion["B"][simbolo];
            console.log(validacion["B"][simbolo]);
            break;
          case "C":
            estado = validacion["C"][simbolo];
            console.log(validacion["C"][simbolo]);
            break;
          case "D":
            estado = validacion["D"][simbolo];
            console.log(validacion["D"][simbolo]);
            break;
          case "E":
            estado = validacion["E"][simbolo];
            console.log(validacion["E"][simbolo]);
            break;
          case "F":
            estado = validacion["F"][simbolo];
            console.log(validacion["F"][simbolo]);
            break;
          case "null":
            estado = "null";
            console.log("es null");
        }
      });
    } else {
      return `la cadena ingresada ** ${verificar} ** no pertenece al alfabeto`
    }
    
    if (estado === "E" || estado === "D" || estado === "F") {
      return `la cadena ingresada  ** ${verificar} ** es aceptada`
    } else {
      return `la cadena ingresada ** ${verificar} ** es rechazada`
    }
  }
}

// let cadena = "aba";

// let n = cadena.split("");

// let set = new Set(n);

// let nuev = [...set];

// let comprobador = true;

// nuev.forEach((e) => {
//   if (e != "a" && e != "b") {
//     comprobador = false;
//   }
//   if (e == " ") {
//     console.log("no puedes dejar espacios en blanco");
//   }
// });

// let validacion = {
//   A: {
//     a: "B",
//     b: "null",
//   },
//   B: {
//     a: "C",
//     b: "D",
//   },
//   C: {
//     a: "null",
//     b: "E",
//   },
//   D: {
//     a: "F",
//     b: "null",
//   },
//   E: {
//     a: "null",
//     b: "null",
//   },
//   F: {
//     a: "F",
//     b: "null",
//   },
// };

// let estado = "A";
// let verificar = cadena.replace(/\s+/g, "");

// if (comprobador) {
//   let cad = verificar.split("");
//   console.log(cad);
//   let i = 1;
//   cad.forEach((simbolo) => {
//     switch (estado) {
//       case "A":
//         estado = validacion["A"][simbolo];
//         console.log(validacion["A"][simbolo]);
//         break;
//       case "B":
//         estado = validacion["B"][simbolo];
//         console.log(validacion["B"][simbolo]);
//         break;
//       case "C":
//         estado = validacion["C"][simbolo];
//         console.log(validacion["C"][simbolo]);
//         break;
//       case "D":
//         estado = validacion["D"][simbolo];
//         console.log(validacion["D"][simbolo]);
//         break;
//       case "E":
//         estado = validacion["E"][simbolo];
//         console.log(validacion["E"][simbolo]);
//         break;
//       case "F":
//         estado = validacion["F"][simbolo];
//         console.log(validacion["F"][simbolo]);
//         break;
//       case "null":
//         estado = "null";
//         console.log("es null");
//     }
//   });
// } else {
//   console.log("cadena no valido");
// }

// if (estado === "E" || estado === "D" || estado === "F") {
//   console.log(`la cadena ingresada ${verificar} es aceptada`);
// } else {
//   console.log(`la cadena ingresada ${verificar} es rechazada`);
// }
