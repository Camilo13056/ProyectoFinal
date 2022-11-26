function obteneRDatos() {
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("contrasena").value;
    let pass2 = document.getElementById("contraseña").value;
    if (pass === pass2) {
      if (pass.length < 6) {
        Swal.fire({
          title: "Error!",
          text: "La contraseña debe tener al menos 6 caracteres",
          icon: "error",
          confirmButtonText: "De acuerdo",
        });
      } else {
        Swal.fire({
          title: "Correcto!",
          icon: "success",
          confirmButtonText: "Vamos!",
        }).then(() => {
          location.href = "https://sweetalert2.github.io/#download";
        });
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "Las contraseñas no coinciden",
        icon: "error",
        confirmButtonText: "De acuerdo",
      });
    }
  }
