@extends('template.layout')
@section('titleGeneral', 'Registrar ciudad...')
@section('sectionGeneral')
<form id="frmCityInsert" action="{{url('city/insert')}}" method="post">
	<div class="row">
		<div class="col-md-12 form-group">
			<label for="">Nombre</label>
			<input type="text" id="txtName" name="txtName" class="form-control">
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-md-12 text-right">
			<button type="button" class="btn btn-primary" onclick="sendFrmCityInsert();">Registrar datos</button>
		</div>
	</div>
</form>
@endsection

@section('js')
<script src="{{asset('viewresources/city/insert.js')}}"></script>
<script src="{{asset('plugins/sweetalert2/sweetAlert.all.min.js')}}"></script>
<!--<scrript src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>-->
<script src="{{asset('plugins/notify/notify.min.js')}}"></script>
@endsection

