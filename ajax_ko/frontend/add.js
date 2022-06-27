$(document).on("click", "#add", function () {
  var buku = new Object();
  buku.judul_buku = $("#judul_buku").val();
  buku.penulis = $("#penulis").val();
  buku.penerbit = $("#penerbit").val();
  $.post("../backend/tambah_proses.php", JSON.stringify(buku), function (resp,status) {
    let result = resp;
    if (result.status == "success") {
      window.location.href = "index.html";
    } else {
      alert("data gagal tersimpan");
    }
  });
});
