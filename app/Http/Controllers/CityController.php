<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\TCity;
 
class CityController extends Controller
{
	public function actionInsert(Request $request)
	{
		if($request->isMethod('post'))
		{
			$tCity = new TCity();

			$tCity->idCity = uniqid();
			$tCity->name = $request->input('txtName');

			$tCity->save();

			return redirect('city/insert');
		}

		return view('city/insert');
	}

	public function actionGetAll()
	{
		$listTCity = TCity::all();

		return view('city/getall',
		[
			'listTCity' => $listTCity
		]);
	}
}