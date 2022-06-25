let param = window.location.search;
let urlparam = new URLSearchParams(param);
let id = urlparam.get("id");
console.log(id);
let data = new Object();
data.id = id;


let jsondata = JSON.stringify(data);
$.post(
    "../backend/get_by_id.php",
    jsondata,
    function (resp) {
        let detail_data = JSON.parse(resp);
        console.log(JSON.parse(resp));
        $("#judul_buku").val(detail_data.judul_buku);
        $("#penulis").val(detail_data.penulis);
        $("#penerbit").val(detail_data.penerbit);
        
    }
);


$(document).on('click', '#save', function () {
    let dt = new Object();
    dt.id = id;
    dt.judul_buku = $("#judul_buku").val();
    dt.penulis = $("#penulis").val();
    dt.penerbit = $("#penerbit").val();
    let new_data = JSON.stringify(dt);
    $.post(
        "../backend/update_data.php",
        new_data,
        function (resp) {
            console.log(resp);
            let result = JSON.parse(resp);
            if (result.status === "success") {
              alert("Terjadi perubahan data");
              window.location.href = "index.html";
            } else {
              alert("Eror");
            }
        }
        
    );

});