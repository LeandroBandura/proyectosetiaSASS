document.addEventListener('DOMContentLoaded',()=>{

    Swal.fire({
        title: 'Sos empleado textil?',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'enviar',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
         // return fetch(`//api.github.com/users/${login}`)
           // .then(response => {
             // if (!response.ok) {
             //   throw new Error(response.statusText)
              //}
              //return response.json()
            //})
            //.catch(error => {
              //Swal.showValidationMessage(
                //`Request failed: ${error}`
              //)
           // })
           if (login == 'si'){
            Swal.fire('Bienvenido al Sindicato Textil')
           }else{
            Swal.fire('Por favor genere su afiliación')
           }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          })
        }
      })
})