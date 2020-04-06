/*----This is for cursor----*/
let mouseCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", cursor);

function cursor(e){
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}



let theStateOfTheInterface = (event) => { 
  
  let winH = document.documentElement.clientHeight
  let docH = document.documentElement.scrollHeight
  let winY = window.scrollY
  let maxY = docH - winH    




/*----This is for infinite scroll----*/
//To make this better I would have made an array with items
//The "next item" would be a variable 
//which would be used in the return

if (winY >= maxY) {
        document.querySelector('.grid-lol').innerHTML += `
        <article class="intro-artstyle">
          <section class="bottom-border">
            <div class="bg-color"><a href="review.html"><img src="img/comic-book-2.jpg" class="m-riv" alt="frankocean"></a></div>
            <h2 class="title"><a href="review.html">Akira #3</a></h2>
            <p class="author">Written by: A cat</p>
          </section>
        </article>
    
        <article class="intro-artstyle">
        <section class="bottom-border">
           <div><img src="img/comic-book-5.jpg" class="p-crt" alt="playboycarti"></div>
           <h2 class="title"><a href="#">Action Comics #1</a></h2>
           <p class="author">Written by: Sonic</p>
        </section>
     </article>
    
     <article class="intro-artstyle">
     <section class="bottom-border">
        <div><img src="img/comic-book-4.jpg" class="b-sat" alt="saturation"><a href="review.html"></a></div>
        <h2 class="title"><a href="#">Star Wars</a></h2>
        <p class="author">Written by: Chewy</p>
     </section>
    </article>
    
    <article class="intro-artstyle">
    <section class="bottom-border">
       <div><img src="img/comic-book-6.jpg" class="f-gbs" alt="intro"></div>
       <h2 class="title"><a href="#">Black Panther</a></h2>
       <p class="author">Written by: Lyndon</p>
    </section>
    </article>
    
    <article class="intro-artstyle">
    <section class="bottom-border">
       <div class="bg-color"><a href="review.html"><img src="img/comic-book-2.jpg" class="m-riv" alt="frankocean"></a></div>
       <h2 class="title"><a href="review.html">Akira #3</a></h2>
       <p class="author">Written by: A cat</p>
    </section>
    </article>
    
    <!-- Product 3 -->
    <article class="intro-artstyle">
       <section class="bottom-border">
          <div class="bg-color"><a href="review.html"><img src="img/comic-book-3.jpg" class="r-jes" alt="runthejewels"></a></div>
          <h2 class="title"><a href="review.html">Sin City: A Game to Kill For</a></h2>
          <p class="author">Written by: Superman</p>
       </section>
    
          ` 
      };


      //This is the carousel 

      previewComic.addEventListener (`click`, (event) => {

  document.querySelector(`.preview-area`).style.display = ("block");

      var imgPrevNum = 1;
  
      document.querySelector(`.image-result`).innerHTML = (`<img id="num${imgPrevNum}" class="img-preview" src="img/comic-preview-${imgPrevNum}.png" alt="num${imgPrevNum}">
      `);

      document.getElementById('nextImg').addEventListener('click', function() {
      if ( imgPrevNum !== 6 ) {
          imgPrevNum++;
          document.querySelector(`.image-result`).innerHTML = (`<img id="num${imgPrevNum}" class="img-preview" src="img/comic-preview-${imgPrevNum}.png" alt="num${imgPrevNum}">
      `);
      }

      if ( imgPrevNum  >= 6 ) {
        imgPrevNum = 1;
        document.querySelector(`.image-result`).innerHTML = (`<img id="num${imgPrevNum}" class="img-preview" src="img/comic-preview-${imgPrevNum}.png" alt="num${imgPrevNum}">
    `);
    }
      })


  
      document.getElementById('previousImg').addEventListener('click', function() {
      if ( imgPrevNum !== 0 ) {
          imgPrevNum--;
          document.querySelector(`.image-result`).innerHTML = (`<img id="num${imgPrevNum}" class="img-preview" src="img/comic-preview-${imgPrevNum}.png" alt="num${imgPrevNum}">
      `);
      }

      if ( imgPrevNum  <= 1 ) {
        imgPrevNum = 5;
        document.querySelector(`.image-result`).innerHTML = (`<img id="num${imgPrevNum}" class="img-preview" src="img/comic-preview-${imgPrevNum}.png" alt="num${imgPrevNum}">
    `);
    }
      })
  
  
  })  

  
  closeTab.addEventListener (`click`, (event) => {
      
  document.querySelector(`.preview-area`).style.display = ("none");

  
  })






      //This is the  scroll spy (a basic version).
      //To make it better I would've added different sections
      //Didn't because trying to manage time
      document.querySelectorAll('.trigger-return').forEach(($sec) => {

        let secH = $sec.scrollHeight  
        let topPx = $sec.offsetTop 
        let botPx = topPx + secH    
    
        if (winY >= topPx) {
          document.querySelector(`.return-up`).style.opacity = ("1");
          document.querySelector(`.return-up`).style.transitionDuration = ("1s");
          document.querySelector(`.return-up`).style.top = ("0");
        }
    
        if (winY <= topPx) {
          document.querySelector(`.return-up`).style.opacity = ("0");
        }


      })
      

  // Button to scroll back to the page was being weird. Had to use a <a> instead of <buttom>
  //After cleaning up the code a bit it may have been the placing of JS that was the issue
  var btn = $('#buttonFix');

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });


    }
    
  
  window.addEventListener('load', theStateOfTheInterface)
  window.addEventListener('scroll', theStateOfTheInterface)
  window.addEventListener('resize', theStateOfTheInterface)
  
