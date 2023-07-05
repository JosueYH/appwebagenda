'use strict';

$(() => {
  $('#frmCityInsert').formValidation({
    framework: 'bootstrap',
    excluded: [':disabled', ':hidden', ':not(:visible)', '[class*="notValidate"]'],
    live: 'enabled',
    message: '<b style="color: #9d9d9d;">Asegúrese que realmente no necesita este valor.</b>',
    trigger: null,
    fields: {
      txtName: {
        validators: {
          notEmpty: {
            message: '<b style="color: red;">Este campo es requerido.</b>'
          }
        }
      }
    }
  });
});

function sendFrmCityInsert() {
  var isValid = null;

  $('#frmCityInsert').data('formValidation').resetForm();
  $('#frmCityInsert').data('formValidation').validate();

  isValid = $('#frmCityInsert').data('formValidation').isValid();

  if (!isValid) {
    return;
  }

  Swal.fire({
    title: 'Confirmar inserción',
    text: '¿Está seguro de que desea insertar el registro?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      $('#frmCityInsert')[0].submit();

    // Mostrar el mensaje de éxito utilizando Notify
    $.notify('Se ha registrado correctamente🙂', 'success');
    }

    else {
    // Código a ejecutar si se cancela o cierra el diálogo
    $.notify('La inserción fue cancelada😢', 'warning');
    }

   });
}

