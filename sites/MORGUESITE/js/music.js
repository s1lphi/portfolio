const menuBtn = document.querySelector(".menu-btn-container");
const closeMenuBtn = document.getElementById("cross");
const body = document.body;

menuBtn.addEventListener('click', () => {

    const menuWrapper = document.querySelector(".menu-wrapper");

    setTimeout(() => {
        menuWrapper.style.display = "flex";
        setTimeout(() => {
            menuWrapper.style.opacity = 1;
            body.style.overflowY = "hidden";
        }, 300);
    }, 250);

});

closeMenuBtn.addEventListener('click', () => {

    const menuWrapper = document.querySelector(".menu-wrapper");

    setTimeout(() => {
        menuWrapper.style.opacity = 0;
        setTimeout(() => {
            menuWrapper.style.display = "none";
            body.style.overflowY = "auto";
        }, 300);
    }, 250);

});

const wrapper = document.querySelector(".wrapper");

window.onload = function() {
    
    setTimeout(() => {
        wrapper.style.opacity = 1;
    }, 500);

  };

  $(document).ready(function() {
    $.ajax({
      url: "/sites/MORGUESITE/php/get_album_data.php",
      dataType: "json",
      success: function(data) {
        $.each(data, function(index, album) {
          var $container = $("<div>", {"class": "album-img-container"});
          var $hover = $("<div>", {"class": "hover"});
          var $year = $("<p>").text(album.year);
          var $name = $("<p>").text(album.name);
          var $img = $("<img>", {"src": album.imgsrc, "alt": ""});
  
          $hover.append($year);
          $hover.append($name);
          $container.append($hover);
          $container.append($img);
  
          $(".albums-wrapper .next-btn-container").before($container);


          $container.click(function() {
            window.location.href = album.srclnk;
          });
        });
      }
    });
  });

  $(document).ready(function() {
    $.ajax({
      url: "/php/get_singles_data.php",
      dataType: "json",
      success: function(singleData) {
        $.each(singleData, function(singleIndex, singleAlbum) {
          var $singleContainer = $("<div>", {"class": "single-img-container"});
          var $singleHover = $("<div>", {"class": "hover"});
          var $singleYear = $("<p>").text(singleAlbum.year);
          var $singleName = $("<p>").text(singleAlbum.name);
          var $singleImg = $("<img>", {"src": singleAlbum.imgsrc, "alt": ""});
  
          $singleHover.append($singleYear);
          $singleHover.append($singleName);
          $singleContainer.append($singleHover);
          $singleContainer.append($singleImg);
  
          $(".singles-wrapper .next-btn-container").before($singleContainer);
  
          $singleContainer.click(function() {
            window.location.href = singleAlbum.srclnk;
          });
        });
      }
    });
  });
  


  $(document).ready(function() {
    var page = 0;
    var itemsPerPage = 3;
    var data = null;
    
    $.ajax({
      url: "/sites/MORGUESITE/php/get_album_data.php",
      dataType: "json",
      success: function(responseData) {
        data = responseData;
        initPage(data, page, itemsPerPage);
      }
    });
    
    $('.next-btn-albms').on('click', function() {
      page++;
      if (page * itemsPerPage >= data.length) {
        page = 0;
      }
      initPage(data, page, itemsPerPage); 
    });
  });
  
  function initPage(data, pageNumber, itemsPerPage) {
    var start = pageNumber * itemsPerPage; 
    var end = start + itemsPerPage; 
    var $albumContainers = $('.albums-wrapper .album-img-container');
  
    $albumContainers.filter(':visible').fadeOut(500);
  
    $albumContainers.slice(start, end).delay(500).fadeIn(500);
  
    if (end >= data.length) {
      $('.next-btn-albms').prop('disabled', true);
    } else {
      $('.next-btn-albms').prop('disabled', false);
    }
  }

  /* Пагінація сінглів */

  $(document).ready(function() {
    var singlePage = 0; 
    var singleItemsPerPage = 3; 
    var singleData = null; 
  
    $.ajax({
      url: "/sites/MORGUESITE/php/get_singles_data.php",
      dataType: "json",
      success: function(responseData) {
        singleData = responseData;
        initSinglePage(singleData, singlePage, singleItemsPerPage);
      }
    });
  
    $('.next-btn-sngls').on('click', function() {
      singlePage++; 
      if (singlePage * singleItemsPerPage >= singleData.length) {
        singlePage = 0; 
      }
      initSinglePage(singleData, singlePage, singleItemsPerPage); 
    });
  });
  
  function initSinglePage(data, pageNumber, itemsPerPage) {
    var start = pageNumber * itemsPerPage; 
    var end = start + itemsPerPage; 
    var $singleContainers = $('.singles-wrapper .single-img-container');
  
    $singleContainers.filter(':visible').fadeOut(500);
  
    $singleContainers.slice(start, end).delay(500).fadeIn(500);
  
    if (end >= data.length) {
      $('.next-btn-sngls').prop('disabled', true);
    } else {
      $('.next-btn-sngls').prop('disabled', false);
    }
  }
  


const singlesWrapper = document.querySelector('.singles-wrapper');

// заміняємо перший і другий елемент місцями, якщо розмір екрану від 320px до 1280px
function handleMediaChange() {
  if (window.innerWidth >= 320 && window.innerWidth <= 1280) {
    const first = singlesWrapper.children[0];
    const second = singlesWrapper.children[1];
    singlesWrapper.insertBefore(second, first);
  }
}

// викликаємо handleMediaChange при завантаженні сторінки
window.addEventListener('load', handleMediaChange);







  
  