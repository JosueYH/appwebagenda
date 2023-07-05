
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
  $('#frmCityInsert').data('formValidation').resetForm();
  $('#frmCityInsert').data('formValidation').validate();

  if (!$('#frmCityInsert').data('formValidation').isValid()) {
    return;
  }

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons.fire({
    title: 'Confirmar inserción',
    text: '¿Está seguro de que desea insertar el registro?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      $('#frmCityInsert').submit();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      resetFormFields(); // Restablece los campos del formulario
      Swal.fire(
        'Cancelado',
        'Usted ha cancelado la inserción',
        'error'
      ).then(() => {
        $.notify('usted ha cancelado la inserción 🙁', 'info');
      });
    }
  });

  $('#frmCityInsert').submit(function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    $.ajax({
      url: $(this).attr('action'),
      type: $(this).attr('method'),
      data: $(this).serialize(),
      success: function(response) {
        resetFormFields(); // Restablece los campos del formulario
        Swal.fire(
          'Insertado',
          'Se ha registrado correctamente',
          'success'
        ).then(() => {
          $.notify('Se ha registrado correctamente 🙂', 'success');
        });
      },
      error: function(xhr, status, error) {
        Swal.fire(
          'Error',
          'Ocurrió un error al intentar insertar el registro',
          'error'
        ).then(() => {
          $.notify('Ocurrió un error al insertar el registro 😢', 'warning');
        });
      }
    });
  });
}

function resetFormFields() {
  $('#frmCityInsert')[0].reset(); // Restablece el formulario a su estado inicial
  $('#frmCityInsert').data('formValidation').resetForm(); // Restablece la validación del formulario
}







