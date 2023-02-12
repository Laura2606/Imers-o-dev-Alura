var listaFilmSeries = ["https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjktOTU1ODZjYzBhMTk0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg","https://upload.wikimedia.org/wikipedia/pt/f/f6/Dark_%28s%C3%A9rie%29.jpg", "https://upload.wikimedia.org/wikipedia/pt/7/7a/The_Big_Bang_Theory_Season_11.jpg", "https://br.web.img3.acsta.net/pictures/21/07/01/19/08/5850944.png", "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/08/82/20128877.jpg","https://leiturafilmica.com.br/wp-content/uploads/2022/04/um-sonho-de-liberdade-poster.jpg"]

// adicionando itens à lista utilizando .push
listaFilmSeries.push('https://upload.wikimedia.org/wikipedia/pt/8/85/TheTrumanShow.jpg','https://br.web.img3.acsta.net/medias/nmedia/18/90/08/91/20080540.jpg', 'https://br.web.img2.acsta.net/pictures/14/12/16/13/23/279562.jpg','https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5557055455d833454a02486f8cf10d3ddbe105de08ca76fa8c72cf2f92ef8879._RI_V_TTW_.jpg', 'https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg', 'https://musicart.xboxlive.com/7/40025100-0000-0000-0000-000000000002/504/image.jpg')

var nomes = ['Ozark', 'Dark', 'The Big Bang Theory', 'Caminhos da memória', 'Matrix', 'Um sonho de liberdade','O Show de Truman','Brilho eterno de uma mente sem lembranças', 'Êxodo - Deuses e Reis', 'O resgate do soldado Ryan', 'Batman - The dark night', 'Forrest Gump']

var trailers = ['https://www.youtube.com/watch?v=3CefRpc-Rgo','https://www.youtube.com/watch?v=JkUWmxhtU4E', 'https://www.youtube.com/watch?v=WBb3fojgW0Q', 'https://www.youtube.com/watch?v=5pDKVBS27JE','https://www.youtube.com/watch?v=2KnZac176Hs', 'https://www.youtube.com/watch?v=Y22NgkErOAk', 'https://www.youtube.com/watch?v=dlnmQbPGuls', 'https://www.youtube.com/watch?v=EwFpklTOLLA', 'https://www.youtube.com/watch?v=jexNaaN6v04', 'https://www.youtube.com/watch?v=dcz1Tvsx_f4','https://www.youtube.com/watch?v=GokKUqLcvD8','https://www.youtube.com/watch?v=EXeTwQWrcwY','https://www.youtube.com/watch?v=bLvqoHBptjg']
//teste >>>
document.write('<div class="container_todosFilmes">')
//usando while ao invés de for
var i=0;
while (i < listaFilmSeries.length) {
if(listaFilmSeries[i].endsWith("jpg") ||
  listaFilmSeries[i].endsWith("png") ||
  listaFilmSeries[i].endsWith("jpeg"))
 {
document.write('<div class="container_filme">')  
document.write("<img src=" + listaFilmSeries[i] + '>')
document.write('<p class="filme-titulo"></p>')
document.write('<a href="'+ trailers[i] + '"</a>')
document.write('<a href="' + trailers[i] + '" target="_blank" onclick="window.open(this.href); return false;">' + '<p>' + nomes[i] + '</p>' + '</a>')
document.write('</div>')
  //colocando títulos embaixo das imagens
}
 else { document.write('O formato do arquivo não corresponde as especificações.')}
i++; 
}
document.write('</div>')
