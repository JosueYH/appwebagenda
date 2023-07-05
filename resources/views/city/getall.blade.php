@extends('template.layout')
@section('titleGeneral', 'Lista de ciudades...')
@section('sectionGeneral')
<table class="table table-striped">
	<thead>
		<tr>
			<th>Nombre</th>
			<th>Fecha registro</th>
		</tr>
	</thead>
	<tbody>
		@foreach($listTCity as $value)
			<tr>
				<td>{{$value->name}}</td>
				<td>{{$value->created_at}}</td>
			</tr>
		@endforeach
	</tbody>
</table>
@endsection