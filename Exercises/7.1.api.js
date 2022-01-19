import request from "request";
import axios from "axios";
import got from "got";
const baseURL = "https://ghibliapi.herokuapp.com/locations";
request({ url: baseURL }, (err, res) => {
	console.log(JSON.parse(res.body));
});
axios.get(baseURL).then((res) => {
	console.log(res.data);
});
const getData = async () => {
	const res = await got.get(baseURL).json();
	console.log(res);
};
getData();
