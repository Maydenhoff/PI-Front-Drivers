const regexNameandSurname = /^[A-Za-z]+$/;
const regexImage =
  /^(http|https):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(?:\/[\w\-./?%&=]*)?$/;
// const regexFecha = /^\d{4}-\d{2}-\d{2}$/

export const validation = (event, setErrors) => {
  if (event.name === "name") {
    if (!regexNameandSurname.test(event.value)) {

      setErrors((prevValue) => {
        return { ...prevValue, name: "El nombre no puede contener simbolos" };
      });
    } else {
      setErrors((prevValue) => {
        return { ...prevValue, name: "" };
      });
    }
  }
  if (event.name === "surname") {
    if (!regexNameandSurname.test(event.value)) {
      setErrors((prevValue) => {
        return {
          ...prevValue,
          surname: "El apellido no puede contener simbolos",
        };
      });
    } else {
      setErrors((prevValue) => {
        return { ...prevValue, surname: "" };
      });
    }
  }
  if (event.name === "nationality") {
    if (event.value.length < 3) {
      setErrors((prevValue) => {
        return { ...prevValue, nationality: "Debe ser mas larga" };
      });
    } else {
      setErrors((prevValue) => {
        return { ...prevValue, nationality: "" };
      });
    }
  }
  if (event.name === "image") {
    if (!regexImage.test(event.value)) {
      setErrors((prevValue) => {
        return { ...prevValue, image: "Debe que ser una direccion URL" };
      });
    } else {
      setErrors((prevValue) => {
        return { ...prevValue, image: "" };
      });
    }
  }

  if (event.name === "dob") {
    const fecha = new Date(event.value)
    const fechaHoy = new Date();

    const fechaMinima = new Date()
    fechaMinima.setFullYear(fechaHoy.getFullYear() -18)

    if(fecha > fechaMinima) {
        setErrors((prevValue) =>{
            return {...prevValue, dob: "Debe tener al menos 18 años" }
        })
    } else {
        setErrors((prevValue) => {
            return { ...prevValue, dob: "" };
          });
    }
}

if( event.name === "description") {
  if(event.value.length < 50) {
    setErrors((prevValue) => {
      return {...prevValue, description: "Debe tener al menos 50 caracteres"}
    })
  } else {
    setErrors((prevValue) => {
      return {...prevValue, description: ""}
    })
  }
}

};

export const validationSubmit = (setErrors, userData) => {
  let validation = true
  Object.keys(userData).map( (e) => {
    if (e === "name") {
        if (!regexNameandSurname.test(userData[e])) {
          validation = false
          setErrors((prevValue) => {
            return { ...prevValue, name: "El nombre no puede contener simbolos" };
          });
        } else {
          setErrors((prevValue) => {
            return { ...prevValue, name: "" };
          });
        }
      }
      if (e === "surname") {
        if (!regexNameandSurname.test(userData[e])) {
          validation = false
          setErrors((prevValue) => {
            return {
              ...prevValue,
              surname: "El apellido no puede contener simbolos",
            };
          });
        } else {
          setErrors((prevValue) => {
            return { ...prevValue, surname: "" };
          });
        }
      }
      if (e === "nationality") {
        if (userData[e].length < 3) {
          validation = false
          setErrors((prevValue) => {
            return { ...prevValue, nationality: "Debe ser mas larga" };
          });
        } else {
          setErrors((prevValue) => {
            return { ...prevValue, nationality: "" };
          });
        }
      }
      if (e === "image") {
        if (!regexImage.test(userData[e])) {
          validation = false
          setErrors((prevValue) => {
            return { ...prevValue, image: "Debe que ser una direccion URL" };
          });
        } else {
          setErrors((prevValue) => {
            return { ...prevValue, image: "" };
          });
        }
      }
      
      if (e === "dob") {
        const fecha = new Date(userData[e])
        const fechaHoy = new Date();
        
        const fechaMinima = new Date()
        fechaMinima.setFullYear(fechaHoy.getFullYear() -18)
        
        if(fecha > fechaMinima) {
          validation = false
          setErrors((prevValue) =>{
            return {...prevValue, dob: "Debe tener al menos 18 años" }
          })
        } else {
          setErrors((prevValue) => {
            return { ...prevValue, dob: "" };
          });
        }
      }
      
      if( e === "description") {
        if(userData[e].length < 50) {
          validation = false
          setErrors((prevValue) => {
            return {...prevValue, description: "Debe tener al menos 50 caracteres"}
          })
        } else {
          setErrors((prevValue) => {
            return {...prevValue, description: ""}
          })
        }
      }
      

    })
    
return validation  



}

