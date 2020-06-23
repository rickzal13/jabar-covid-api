const axios = require("axios");
var apiResponse = require("../model/response");

exports.getAllData = function(req, res) {
	let status = req.query.status;
	axios.get(process.env.URL)
		.then(response => {
			let arrData = response.data.data.content;
			let dataCovid = arrData.filter(
				x => x.nama_kec.toLowerCase() == process.env.KECAMATAN.toLowerCase() && ( typeof(status) != "undefined" && x.status.toLowerCase() == status.toLowerCase() )
			);
			return apiResponse.successResponseWithData(res, "OK", dataCovid);
		})
		.catch(error => {
			return apiResponse.ErrorResponse(res, "OK", error);
		});
};

exports.sumData = function(req, res) {
	let status = req.query.status;
	let kelurahan = req.query.kelurahan;
	axios.get(process.env.URL)
		.then(response => {
			let arrData = response.data.data.content;
			let dataCovid = arrData.filter(
				x => x.nama_kec.toLowerCase() == process.env.KECAMATAN.toLowerCase() && 
                ( typeof(status) != "undefined" && x.status.toLowerCase() == status.toLowerCase() ) &&
                ( typeof(kelurahan) != "undefined" && x.nama_kel.toLowerCase() == kelurahan.toLowerCase() )
			);
			let sumData = dataCovid.length;
			return apiResponse.successResponseWithData(res, "OK", sumData);
		})
		.catch(error => {
			return apiResponse.ErrorResponse(res, "OK", error);
		});
};

exports.groupDatabyKecamatan = function(req, res) {
	let status = req.query.status;
	axios.get(process.env.URL)
		.then(response => {
			let arrData = response.data.data.content;
			let dataCovid = arrData.filter(
				x => x.nama_kec.toLowerCase() == process.env.KECAMATAN.toLowerCase() &&
				( typeof(status) != "undefined" && x.status.toLowerCase() == status.toLowerCase() ) 
			);
			var result = [];
			var arrGroup = dataCovid.reduce(function (res, value) {
				if (!res[value.nama_kel]) {
					res[value.nama_kel] = {
						id: value.nama_kel,
						jumlah: 0,
					};
					result.push(res[value.nama_kel]);
				}
				res[value.nama_kel].jumlah += 1;
				return res;
			}, {});
			return apiResponse.successResponseWithData(res, "Data "+status, arrGroup);
		})
		.catch(error => {
			return apiResponse.ErrorResponse(res, "OK", error);
		});
};